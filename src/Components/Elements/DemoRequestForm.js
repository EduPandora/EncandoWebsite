import React, { useState } from 'react';

const DemoRequestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // JSONP submission method (avoids CORS completely)
    const submitViaJSONP = (data) => {
        return new Promise((resolve, reject) => {
            const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
            
            // Create callback function
            window[callbackName] = function(response) {
                delete window[callbackName];
                document.body.removeChild(script);
                resolve(response);
            };
            
            // Create script element for JSONP
            const script = document.createElement('script');
            const params = new URLSearchParams({
                ...data,
                callback: callbackName
            });
            
            script.src = `https://script.google.com/macros/s/AKfycbyE04JPHhn5eEu4q52ybXyR7Q9Kir4aktMa2NxM-BYAPiPm2FEflC9Lkv6M0WUjBdcm/exec?${params}`;
            
            // Handle errors
            script.onerror = function() {
                delete window[callbackName];
                document.body.removeChild(script);
                reject(new Error('JSONP request failed'));
            };
            
            document.body.appendChild(script);
            
            // Timeout after 10 seconds
            setTimeout(() => {
                if (window[callbackName]) {
                    delete window[callbackName];
                    document.body.removeChild(script);
                    reject(new Error('JSONP request timed out'));
                }
            }, 10000);
        });
    };

    // Alternative submission method using form post (backup)
    const submitViaForm = (data) => {
        return new Promise((resolve) => {
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = 'https://script.google.com/macros/s/AKfycbyE04JPHhn5eEu4q52ybXyR7Q9Kir4aktMa2NxM-BYAPiPm2FEflC9Lkv6M0WUjBdcm/exec';
            form.target = '_blank';
            form.style.display = 'none';

            // Add form fields
            Object.keys(data).forEach(key => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = data[key];
                form.appendChild(input);
            });

            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
            
            // Assume success since we can't get response from form submission
            setTimeout(() => resolve({ success: true }), 1000);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const { name, email, company, phone } = formData;
            
            // Try form-encoded POST request first (more reliable than JSON)
            try {
                const formBody = new URLSearchParams({
                    name,
                    email,
                    company,
                    phone
                });

                const resp = await fetch('https://script.google.com/macros/s/AKfycbyE04JPHhn5eEu4q52ybXyR7Q9Kir4aktMa2NxM-BYAPiPm2FEflC9Lkv6M0WUjBdcm/exec', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: formBody
                });
                
                if (resp.ok) {
                    const result = await resp.json();
                    if (result.result === 'success') {
                        setSubmitStatus('success');
                        setFormData({ name: '', email: '', company: '', phone: '' });
                    } else {
                        throw new Error(result.message || 'Server returned error');
                    }
                } else {
                    throw new Error('POST failed, trying JSONP');
                }
            } catch (postError) {
                console.log('POST failed, trying JSONP method:', postError);
                
                // Try JSONP method
                try {
                    const result = await submitViaJSONP({ name, email, company, phone });
                    if (result.result === 'success') {
                        setSubmitStatus('success');
                        setFormData({ name: '', email: '', company: '', phone: '' });
                    } else {
                        throw new Error(result.message || 'JSONP returned error');
                    }
                } catch (jsonpError) {
                    console.log('JSONP failed, using form submission:', jsonpError);
                    
                    // Final fallback: form submission
                    await submitViaForm({ name, email, company, phone });
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', company: '', phone: '' });
                }
            }
        } catch (error) {
            console.error('All submission methods failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-auto">
            <div className="p-6">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Get Your Demo</h3>
                    <p className="text-gray-600 mt-2">Fill out the form below and we'll be in touch soon.</p>
                </div>

                {submitStatus === 'success' && (
                    <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                        Thank you! We'll be in touch soon.
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                        Sorry, there was an error. Please try again.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="john@university.edu"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                            Company/Institution *
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="University of Technology"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="+1 (555) 123-4567"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-light)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                        >
                            {isSubmitting ? 'Submitting...' : 'Request Demo'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DemoRequestForm;