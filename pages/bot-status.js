import { useState, useEffect } from 'react';

export default function BotStatus() {
  const [botData, setBotData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBotStatus = async () => {
      try {
        const response = await fetch('http://your-bot-server-ip:7965/status');
        if (!response.ok) {
          throw new Error('Failed to fetch bot status');
        }
        const data = await response.json();
        setBotData(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBotStatus();
    const interval = setInterval(fetchBotStatus, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading bot status...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bot-status">
      <h1>Discord Bot Status</h1>
      <div className="status-card">
        <h2>Current Status</h2>
        <p>
          <strong>Online:</strong> {botData.online ? '✅ Online' : '❌ Offline'}
        </p>
        {botData.online && (
          <>
            <p><strong>Uptime:</strong> {Math.floor(botData.uptime / 3600)}h {Math.floor((botData.uptime % 3600) / 60)}m</p>
            <p><strong>Ping:</strong> {botData.ping}ms</p>
            <p><strong>Guilds:</strong> {botData.guildCount}</p>
            <p><strong>Users:</strong> {botData.userCount}</p>
            <p><strong>Commands Loaded:</strong> {botData.commandsLoaded}</p>
            <p><strong>Current Activity:</strong> {botData.currentActivity?.name || 'None'}</p>
            <p><strong>Last Started:</strong> {new Date(botData.lastStart).toLocaleString()}</p>
          </>
        )}
      </div>
    </div>
  );
          }
