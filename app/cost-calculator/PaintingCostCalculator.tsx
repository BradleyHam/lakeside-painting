'use client'
import React, { useState } from 'react';
import Navbar from '@/app/SiteComponents/Navbar';
import ProcessSection from '../HomeComponents/ProcessSection';
import FooterBanner from '@/app/SiteComponents/FooterBanner';
import TopBanner from '@/app/SiteComponents/TopBanner';
import Footer from '@/app/SiteComponents/Footer';
import ButtonSeeMore from '@/app/SiteComponents/ButtonSeeMore';

interface SurfaceTypes {
  [key: string]: {
    rate: number;
    unit: string;
  };
}

interface SurfaceInputs {
  [key: string]: string;
}

const PaintingCostCalculator: React.FC = () => {
    const surfaceTypes: SurfaceTypes = {
        'Interior Walls': { rate: 18.00, unit: 'm²' },
        'Interior Ceilings': { rate: 16.50, unit: 'm²' },
        'Exterior Weatherboards': { rate: 52.00, unit: 'm²' },
        'Roof (Galv Corrugated Iron)': { rate: 26.00, unit: 'm²' },
        'Windows (measured flat over glass)': { rate: 56.00, unit: 'm²' },
        'Doors (per standard door, both sides)': { rate: 150.00, unit: 'door' },
      };
    
      const [inputs, setInputs] = useState<SurfaceInputs>(() => 
        Object.keys(surfaceTypes).reduce((acc, key) => ({ ...acc, [key]: '' }), {})
      );
      const [totalCost, setTotalCost] = useState<number | null>(null);
    
      const handleInputChange = (name: string, value: string) => {
        setInputs(prev => ({ ...prev, [name]: value }));
      };
    
      const calculateTotalCost = () => {
        let cost = 0;
        for (const [surfaceType, value] of Object.entries(inputs)) {
          if (value) {
            const quantity = parseFloat(value);
            cost += quantity * surfaceTypes[surfaceType].rate;
          }
        }
        setTotalCost(Number(cost.toFixed(2)));
      };
    
      return (
      
        <div className="bg-light-bg/10 min-h-screen py-section-spacing px-side-spacing">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-primary text-white py-6 px-8">
              <h1 className="text-base font-semibold">Queensotwn Painting Cost Calculator</h1>
              
            </div>
            
            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(surfaceTypes).map(([surfaceType, { unit }]) => (
                  <div key={surfaceType} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">{surfaceType}</label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="number"
                        value={inputs[surfaceType]}
                        onChange={(e) => handleInputChange(surfaceType, e.target.value)}
                        placeholder={`Enter ${unit}`}
                        className="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                   focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                      <span className="text-gray-500">{unit}</span>
                    </div>
                  </div>
                ))}
              </div>
    
              <button
                onClick={calculateTotalCost}
                className="mt-8  bg-secondary text-white font-bold  py-3 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200"
              >
                Calculate Total Cost
              </button>
    
              {totalCost !== null && (
                <div className="mt-6 p-4 bg-success-light border-l-4 border-success rounded-r-md">
                  <h3 className="text-lg font-semibold text-success-dark">Estimated Total Cost:</h3>
                  <p className="text-2xl font-bold text-success">${totalCost.toFixed(2)}</p>
                </div>
              )}
    
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Rate Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 border-b text-gray-700">Surface Type</th>
                        <th className="p-3 border-b text-gray-700">Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(surfaceTypes).map(([type, { rate, unit }]) => (
                        <tr key={type} className="hover:bg-gray-50">
                          <td className="p-3 border-b">{type}</td>
                          <td className="p-3 border-b">${rate.toFixed(2)} per {unit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
    
              <div className="mt-8 p-4 bg-info-light rounded-md text-sm text-gray-600">
                <p><strong className="text-info-dark">Note:</strong> These rates are averages and include paint, materials, labour, and some allowance for overhead and profit. They may not account for specific circumstances such as difficult access, premium paints, extensive surface preparation, or regional cost variations.</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-12'>
            <ButtonSeeMore label='Read Our Blog Article On Painting Costs' linkTo='https://www.kiwipaintingtips.co.nz/painting-cost-calculator' />
          </div>
        </div>
      
      );
    };


export default PaintingCostCalculator;
