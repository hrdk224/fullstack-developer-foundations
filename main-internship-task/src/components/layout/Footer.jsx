import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-outline-variant/30 py-16 mt-section-gap">
      <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-4">
          <Link to="/" className="font-headline-sm text-headline-sm text-primary font-bold tracking-tighter hover:opacity-90">
            CORE TECH
          </Link>
          <p className="text-on-surface-variant max-w-sm font-label-sm opacity-60">
            Engineering the future of modular hardware. Designed for longevity,
            performance, and the professional ecosystem.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex flex-col gap-4">
            <span className="font-label-sm text-primary tracking-widest uppercase">
              Company
            </span>
            <Link
              className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              to="/shop"
            >
              Shop Catalog
            </Link>
            <a
              className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-sm text-primary tracking-widest uppercase">
              Resources
            </span>
            <Link
              className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              to="/ecosystem"
            >
              Modular Ecosystem
            </Link>
            <a
              className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Hardware Warranty
            </a>
            <a
              className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Support
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/30">
        <p className="font-label-sm text-label-sm text-on-surface-variant opacity-80 uppercase tracking-widest">
          © 2026 CORE TECH ECOSYSTEM. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
