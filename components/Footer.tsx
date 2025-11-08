import Link from 'next/link';
import { companyInfo } from '@/lib/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-anthracite text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">
              {companyInfo.name}
            </h3>
            <p className="text-warm-200 text-sm mb-4">
              Installateur professionnel de cuisines et aménagements intérieurs
              avec plus de {companyInfo.experience} ans d'expérience.
            </p>
            <p className="text-warm-300 text-xs">
              {companyInfo.legalName}
              <br />
              TVA : {companyInfo.vat}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-warm-200">
              <li>
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </li>
              <li className="pt-2">
                {companyInfo.address.street}
                <br />
                {companyInfo.address.postalCode} {companyInfo.address.city}
                <br />
                {companyInfo.address.country}
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-warm-200">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-white transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Horaires</h4>
            <ul className="space-y-2 text-sm text-warm-200">
              <li>{companyInfo.hours.weekdays}</li>
              <li>{companyInfo.hours.saturday}</li>
              <li>{companyInfo.hours.sunday}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-warm-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-warm-300">
              © {currentYear} {companyInfo.name}. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-warm-300">
              <Link
                href="/mentions-legales"
                className="hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
