'use client';

import { useState, useEffect } from 'react';
import { RegionalHub } from '@/types';

const hubMap: Record<string, RegionalHub> = {
  // NCR (Luzon)
  'metro manila': 'ncr',
  'quezon city': 'ncr',
  'makati': 'ncr',
  'taguig': 'ncr',
  'pasig': 'ncr',
  'laguna': 'ncr',
  'cavite': 'ncr',
  'bulacan': 'ncr',
  'rizal': 'ncr',
  'manila': 'ncr',
  'batangas': 'ncr',
  'quezon': 'ncr',
  'batanes': 'ncr',
  'cagayan': 'ncr',
  'nueva ecija': 'ncr',
  'nueva vizcaya': 'ncr',
  'pangasinan': 'ncr',
  'benguet': 'ncr',
  'mountain province': 'ncr',
  'ifugao': 'ncr',
  'kalinga': 'ncr',
  'apayao': 'ncr',
  'ilocos norte': 'ncr',
  'ilocos sur': 'ncr',
  'la union': 'ncr',
  'aurora': 'ncr',
  'tarlac': 'ncr',
  'pampanga': 'ncr',
  'zambales': 'ncr',
  'batangas': 'ncr',
  'mindoro occidental': 'ncr',
  'mindoro oriental': 'ncr',
  'marinduque': 'ncr',
  'romblon': 'ncr',
  'palawan': 'ncr',
  
  // Cebu (Visayas)
  'cebu': 'cebu',
  'cebu city': 'cebu',
  'mandaue': 'cebu',
  'lapu-lapu': 'cebu',
  'bohol': 'cebu',
  'siquijor': 'cebu',
  'negros oriental': 'cebu',
  'bacolod': 'cebu',
  'negros occidental': 'cebu',
  'iloilo': 'cebu',
  'iloilo city': 'cebu',
  'guimaras': 'cebu',
  'capiz': 'cebu',
  'aklan': 'cebu',
  'antique': 'cebu',
  'panay': 'cebu',
  'boracay': 'cebu',
  'tacloban': 'cebu',
  'leyte': 'cebu',
  'southern leyte': 'cebu',
  'biliran': 'cebu',
  'samar': 'cebu',
  'eastern samar': 'cebu',
  'northern samar': 'cebu',
  'western samar': 'cebu',
  'masbate': 'cebu',
  
  // Davao (Mindanao)
  'davao': 'davao',
  'davao city': 'davao',
  'cagayan de oro': 'davao',
  'general santos': 'davao',
  'zamboanga': 'davao',
  'zamboanga city': 'davao',
  'zamboanga sibugay': 'davao',
  'zamboanga del norte': 'davao',
  'zamboanga del sur': 'davao',
  'butuan': 'davao',
  'surigao': 'davao',
  'surigao del norte': 'davao',
  'surigao del sur': 'davao',
  'agusan del norte': 'davao',
  'agusan del sur': 'davao',
  'misamis oriental': 'davao',
  'misamis occidental': 'davao',
  'lanao del norte': 'davao',
  'lanao del sur': 'davao',
  'basilan': 'davao',
  'sulu': 'davao',
  'tawi-tawi': 'davao',
  'maguindanao': 'davao',
  'jolo': 'davao',
  'cotabato': 'davao',
  'south cotabato': 'davao',
  'davao del norte': 'davao',
  'davao del sur': 'davao',
  'davao oriental': 'davao',
  'davao occidental': 'davao',
};

export function useRegionalHub(location?: string): RegionalHub | null {
  const [hub, setHub] = useState<RegionalHub | null>(null);

  useEffect(() => {
    if (location) {
      const normalized = location.toLowerCase().trim();
      const foundHub = Object.entries(hubMap).find(([key]) => 
        normalized.includes(key) || key.includes(normalized)
      )?.[1];
      setHub(foundHub || null);
    }
  }, [location]);

  return hub;
}

export function getHubFromLocation(location: string): RegionalHub | null {
  const normalized = location.toLowerCase().trim();
  return Object.entries(hubMap).find(([key]) => 
    normalized.includes(key) || key.includes(normalized)
  )?.[1] || null;
}
