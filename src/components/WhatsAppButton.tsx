import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fixedLeft?: boolean;
}

export default function WhatsAppButton({ 
  phoneNumber = '6045930080', 
  message = 'Hello! I would like to place an order for some delicious treats from Party Delights!', 
  className = '',
  size = 'md',
  fixedLeft = false
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    // Format phone number (remove any non-digit characters and add country code if needed)
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    const fullPhoneNumber = formattedPhone.startsWith('1') ? formattedPhone : `1${formattedPhone}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${fullPhoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`
        flex items-center justify-center
        rounded-full shadow-xl
        bg-[#25D366] hover:bg-[#1ebe57]
        transition-all duration-300
        border-4 border-white
        ${sizeClasses[size]}
        ${fixedLeft ? 'fixed left-6 bottom-20 z-[9998]' : ''}
        ${className}
      `}
      title="Chat with us on WhatsApp"
      aria-label="Open WhatsApp chat"
      style={{ boxShadow: '0 4px 16px 0 rgba(37,211,102,0.3)' }}
    >
      {/* Official WhatsApp SVG */}
      <svg className={iconSizes[size]} viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.646.86 5.09 2.33 7.09L4 29l7.18-2.28A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.84-.58-5.4-1.58l-.38-.24-4.28 1.36 1.4-4.16-.25-.4A9.93 9.93 0 016 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.02.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
      </svg>
    </button>
  );
} 