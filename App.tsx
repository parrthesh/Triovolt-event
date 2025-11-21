import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import ChatAssistant from './components/ChatAssistant';
import HomeView from './components/HomeView';
import EventsView from './components/EventsView';
import MapView from './components/MapView';
import DashboardView from './components/DashboardView';
import { UserRole } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [userRole, setUserRole] = useState<UserRole>('student');
  const [context, setContext] = useState({ page: 'Home', item: '' });

  // Callback to allow child components to update the context seen by the chatbot
  const handleContextUpdate = useCallback((page: string, item: string = '') => {
    setContext(prev => (prev.page === page && prev.item === item) ? prev : { page, item });
  }, []);

  // Redirect to home if switching to student, or dashboard if switching to admin
  const handleRoleChange = (role: UserRole) => {
    setUserRole(role);
    if (role === 'admin') {
      setCurrentPage('dashboard');
    } else {
      setCurrentPage('home');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView onNavigate={setCurrentPage} setContext={handleContextUpdate} />;
      case 'events':
        return <EventsView setContext={handleContextUpdate} />;
      case 'map':
        return <MapView setContext={handleContextUpdate} />;
      case 'dashboard':
        return <DashboardView />;
      default:
        return <HomeView onNavigate={setCurrentPage} setContext={handleContextUpdate} />;
    }
  };

  return (
    <div className="min-h-screen bg-darkbg text-white selection:bg-trivolt-neon/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-trivolt-purple/20 blur-[120px]" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-trivolt-neon/10 blur-[120px]" />
      </div>

      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        userRole={userRole}
        onRoleChange={handleRoleChange}
      />
      
      <main className="relative z-10 pt-16 min-h-screen">
        {renderPage()}
      </main>

      {userRole === 'student' && <ChatAssistant contextPage={context.page} contextItem={context.item} />}
    </div>
  );
};

export default App;