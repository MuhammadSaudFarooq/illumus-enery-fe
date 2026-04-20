import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, AlertCircle, Loader2, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { leadSchema } from '../utils/validationSchemas';
import { serviceDropdownOptions } from '../data/services';
import apiClient from '../utils/axiosInstance';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '1-800-555-1234', href: 'tel:+18005551234' },
  { icon: Mail, label: 'Email', value: 'commercial@illumusenergy.com', href: 'mailto:commercial@illumusenergy.com' },
  { icon: MapPin, label: 'Office', value: '1200 Commerce Dr, Suite 400, Houston, TX 77001', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri 7am–6pm CT · Emergency 24/7', href: null },
];

function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 font-medium">
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
      {message}
    </p>
  );
}

function FormField({ label, required, error, hint, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy-800 mb-1.5">
        {label}
        {required && <span className="text-accent-600 ml-0.5">*</span>}
      </label>
      {hint && <p className="text-xs text-slate-400 mb-2">{hint}</p>}
      {children}
      <FieldError message={error} />
    </div>
  );
}

const inputClass =
  'w-full px-4 py-3 border rounded-sm text-sm text-navy-900 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent placeholder:text-slate-400';
const inputValid = 'border-slate-200 hover:border-slate-300';
const inputInvalid = 'border-red-400 bg-red-50/50 focus:ring-red-400';

export default function Contact() {
  const [submitState, setSubmitState] = useState('idle'); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      companyName: '',
      contactName: '',
      businessEmail: '',
      serviceRequested: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setSubmitState('loading');
    try {
      const payload = {
        companyName: data.companyName,
        contactName: data.contactName,
        businessEmail: data.businessEmail,
        serviceType: data.serviceRequested,
        message: data.message || '',
      };
      await apiClient.post('/api/leads', payload);
      setSubmitState('success');
      setServerMessage('Quote request received. A member of our commercial team will be in touch within one business day.');
      reset();
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        'Something went wrong. Please try again or call us directly.';
      setServerMessage(msg);
      setSubmitState('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-navy-900/90" />
        <div className="absolute top-0 inset-x-0 h-1 bg-accent-500" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent-500 flex-shrink-0" />
            <p className="section-label mb-0">Get In Touch</p>
          </div>
          <h1 className="animate-fade-up-d1 section-heading-light mb-5 max-w-2xl">
            Request a Commercial{' '}
            <span className="text-accent-500">Project Quote</span>
          </h1>
          <p className="animate-fade-up-d2 text-slate-400 text-lg max-w-xl leading-relaxed">
            We respond to all qualified commercial inquiries within one business
            day. Residential requests will not receive a response.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: contact info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-6">Contact Information</h2>
                <ul className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-accent-500/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-accent-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-navy-800 text-sm hover:text-accent-600 transition-colors font-medium">
                            {value}
                          </a>
                        ) : (
                          <p className="text-navy-800 text-sm font-medium">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* B2B notice */}
              <div className="bg-navy-900 rounded-sm p-6">
                <h3 className="text-white font-semibold mb-2 text-sm">Commercial Clients Only</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Illumus Energy exclusively serves commercial and industrial
                  clients. We do not accept residential projects. Using a business
                  email is required to receive a response.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-sm shadow-sm p-8 lg:p-10">
                <h2 className="text-xl font-bold text-navy-900 mb-1">Lead Generation Form</h2>
                <p className="text-slate-500 text-sm mb-8">
                  All fields marked <span className="text-accent-600 font-bold">*</span> are required.
                </p>

                {/* Success state */}
                {submitState === 'success' && (
                  <div className="mb-8 flex items-start gap-4 bg-green-50 border border-green-200 rounded-sm p-5">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-800 mb-1">Request Submitted Successfully</p>
                      <p className="text-green-700 text-sm">{serverMessage}</p>
                    </div>
                  </div>
                )}

                {/* Error state */}
                {submitState === 'error' && (
                  <div className="mb-8 flex items-start gap-4 bg-red-50 border border-red-200 rounded-sm p-5">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-800 mb-1">Submission Failed</p>
                      <p className="text-red-700 text-sm">{serverMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                  {/* Row 1: company + contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="Company Name" required error={errors.companyName?.message}>
                      <input
                        {...register('companyName')}
                        type="text"
                        placeholder="Acme Retail Corp."
                        className={`${inputClass} ${errors.companyName ? inputInvalid : inputValid}`}
                      />
                    </FormField>

                    <FormField label="Contact Name" required error={errors.contactName?.message}>
                      <input
                        {...register('contactName')}
                        type="text"
                        placeholder="John Doe"
                        className={`${inputClass} ${errors.contactName ? inputInvalid : inputValid}`}
                      />
                    </FormField>
                  </div>

                  {/* Business email */}
                  <FormField
                    label="Business Email"
                    required
                    error={errors.businessEmail?.message}
                    hint="Personal email providers (Gmail, Yahoo, etc.) are not accepted."
                  >
                    <input
                      {...register('businessEmail')}
                      type="email"
                      placeholder="john@yourcompany.com"
                      className={`${inputClass} ${errors.businessEmail ? inputInvalid : inputValid}`}
                    />
                  </FormField>

                  {/* Service dropdown */}
                  <FormField label="Service Required" required error={errors.serviceRequested?.message}>
                    <select
                      {...register('serviceRequested')}
                      className={`${inputClass} ${errors.serviceRequested ? inputInvalid : inputValid} cursor-pointer`}
                      defaultValue=""
                    >
                      {serviceDropdownOptions.map(({ value, label }) => (
                        <option key={value} value={value} disabled={value === ''}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  {/* Message */}
                  <FormField label="Project Description" error={errors.message?.message}>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Brief description of your project — facility type, size, timeline, etc."
                      className={`${inputClass} resize-none ${errors.message ? inputInvalid : inputValid}`}
                    />
                    <p className="mt-1 text-xs text-slate-400">Optional but recommended for faster quoting.</p>
                  </FormField>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting || submitState === 'loading'}
                      className="btn-primary w-full justify-center py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting || submitState === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        'Submit Quote Request'
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">
                      By submitting this form you confirm this is a commercial project inquiry.
                    </p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
