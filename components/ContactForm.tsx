'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          service: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Erreur de connexion. Veuillez réessayer.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="visually-hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-anthracite mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-anthracite focus:ring-2 focus:ring-anthracite/20 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-anthracite mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-anthracite focus:ring-2 focus:ring-anthracite/20 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-anthracite mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-anthracite focus:ring-2 focus:ring-anthracite/20 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-anthracite mb-2">
            Localité *
          </label>
          <input
            type="text"
            id="city"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-anthracite focus:ring-2 focus:ring-anthracite/20 outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-anthracite mb-2">
          Type de service *
        </label>
        <select
          id="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-anthracite focus:ring-2 focus:ring-anthracite/20 outline-none transition-all"
        >
          <option value="">Sélectionnez un service</option>
          <option value="installation-cuisine">Installation de cuisine</option>
          <option value="renovation-interieur">Rénovation d'intérieur</option>
          <option value="reparation-sav">Réparation & SAV</option>
          <option value="menuiserie-mesure">Menuiserie sur mesure</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-anthracite mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-anthracite focus:ring-2 focus:ring-anthracite/20 outline-none transition-all resize-none"
          placeholder="Décrivez votre projet..."
        />
      </div>

      <p className="text-xs text-muted">
        En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous
        recontacter. Consultez notre{' '}
        <a href="/politique-confidentialite" className="underline hover:text-anthracite">
          politique de confidentialité
        </a>
        .
      </p>

      {status === 'success' && (
        <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm">
          Merci ! Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="button-primary w-full md:w-auto px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
      </button>
    </form>
  );
}
