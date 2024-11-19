import React, { useState, useEffect } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        // Simulated API or WebSocket call for real-time notifications
        const simulateNotifications = () => {
            const newNotification = {
                id: notifications.length + 1,
                message: `New booking received! ${new Date().toLocaleTimeString()}`,
                read: false,
            };
            setNotifications(prev => [newNotification, ...prev]);
            setUnreadCount(prev => prev + 1);

            // Pop-up alert for new notification
            setTimeout(() => {
                alert(`Notification: ${newNotification.message}`);
            }, 50);
        };

        const interval = setInterval(simulateNotifications, 10000); // Fetch every 10 seconds
        return () => clearInterval(interval);
    }, [notifications]);

    const handleNotificationClick = (id) => {
        setNotifications(notifications.map(notification =>
            notification.id === id ? { ...notification, read: true } : notification
        ));
        setUnreadCount(notifications.filter(n => !n.read && n.id !== id).length);
    };

    return (
        <div className="relative">
            <button
                className="relative focus:outline-none"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <BellIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
                {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                        {unreadCount}
                    </span>
                )}
            </button>
            {showDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {notifications.length === 0 ? (
                        <div className="p-4 text-gray-600">No notifications</div>
                    ) : (
                        notifications.map(notification => (
                            <div
                                key={notification.id}
                                className={`p-4 border-b border-gray-200 cursor-pointer ${
                                    notification.read ? 'bg-gray-100' : 'bg-white'
                                } hover:bg-gray-50`}
                                onClick={() => handleNotificationClick(notification.id)}
                            >
                                {notification.message}
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Notifications;
