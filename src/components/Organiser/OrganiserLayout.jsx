import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import OrganiserNavbar from './OrganiserNavbar';
import OrganiserSidebar from './OrganiserSidebar';
import OrganiserFooter from './OrganiserFooter';
import { FiX } from 'react-icons/fi';
import OrganiserDashboard from './OrganiserDashboard';

function OrganiserLayout() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex flex-col bg-[#F8FFE5] min-h-screen">
            <OrganiserNavbar onMenuClick={() => setMenuOpen(true)} />

            <div className="flex flex-1 mt-4 mx-4 relative">
                <div className="w-64 sticky top-20 self-start hidden md:block">
                    <div className="mb-10">
                        <OrganiserSidebar />
                    </div>
                </div>

                {menuOpen && (
                    <div className="fixed inset-0 z-50 flex md:hidden">
                        <div className="w-64 bg-gradient-to-b from-white via-yellow-50 to-yellow-100 shadow-xl p-4 flex flex-col justify-between rounded-r-2xl">
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold text-[#F29F05]">Menu</h2>
                                    <button
                                        onClick={() => setMenuOpen(false)}
                                        className="text-3xl text-gray-700"
                                    >
                                        <FiX />
                                    </button>
                                </div>
                                <OrganiserSidebar isMobile onLinkClick={() => setMenuOpen(false)} />
                            </div>

                            <div className="border-t pt-4 mt-4">
                                <OrganiserSidebar isMobile isBottom onLinkClick={() => setMenuOpen(false)} />
                            </div>
                        </div>

                        <div
                            className="flex-1 bg-black bg-opacity-40"
                            onClick={() => setMenuOpen(false)}
                        ></div>
                    </div>
                )}

      
               <main className="flex-1 p-6">
                 <Outlet />
                 <OrganiserFooter />
                </main>

            </div>
        </div>
    );
}

export default OrganiserLayout;