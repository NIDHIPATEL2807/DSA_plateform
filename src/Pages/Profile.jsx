import {
    Book,
    Bookmark,
    Camera,
    Code,
    Edit,
    Globe,
    Mail,
    User
} from 'lucide-react';
import React, { useState } from 'react';
import ProgressCalendar from '../components/ui/ProgressCalendar';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    username: "johndoe123",
    email: "john.doe@example.com",
    bio: "Software Engineer | DSA Enthusiast | Problem Solver",
    website: "https://johndoe.dev",
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe",
    twitter: "twitter.com/johndoe",
    location: "San Francisco, CA"
  });

  const stats = {
    problemsSolved: 145,
    streak: 7,
    submissions: 298,
    ranking: 1234
  };

  const recentActivity = [
    { type: 'solved', problem: 'Two Sum', difficulty: 'Easy', date: '2 hours ago' },
    { type: 'submitted', problem: 'Merge Sort', difficulty: 'Medium', date: '5 hours ago' },
    { type: 'bookmarked', problem: 'Dynamic Programming', difficulty: 'Hard', date: '1 day ago' }
  ];

  const achievements = [
    { name: '7 Day Streak', description: 'Solved at least one problem every day for a week', icon: '🔥' },
    { name: 'Array Master', description: 'Completed all Array problems', icon: '🎯' },
    { name: 'Early Bird', description: 'Joined in the first month', icon: '🌟' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-gray-900 rounded-lg border border-violet-700/30 mb-8">
          <div className="relative h-48 bg-gradient-to-r from-violet-600/20 to-violet-900/20 rounded-t-lg">
            <button className="absolute bottom-4 right-4 bg-gray-900/80 p-2 rounded-full hover:bg-gray-900">
              <Camera className="w-5 h-5 text-violet-300" />
            </button>
          </div>
          
          <div className="p-6 relative">
            <div className="absolute -top-16 left-6">
              <div className="w-32 h-32 bg-gray-800 rounded-full border-4 border-gray-900 flex items-center justify-center">
                <User className="w-16 h-16 text-violet-400" />
              </div>
            </div>

            <div className="ml-40">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-200">{profile.name}</h1>
                  <p className="text-gray-400">@{profile.username}</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>
              <p className="text-gray-300 mt-4">{profile.bio}</p>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>{profile.email}</span>
                </div>
                {profile.website && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Globe className="w-4 h-4" />
                    <a href={profile.website} className="hover:text-violet-400">{profile.website}</a>
                  </div>
                )}
                <div className="flex items-center gap-2 text-gray-400">
                  <a href={`https://${profile.github}`} className="hover:text-violet-400">{profile.github}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Stats & Achievements */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-gray-900 rounded-lg border border-violet-700/30 p-6 transition-transform transform hover:scale-107">
              <h2 className="text-lg font-semibold text-violet-300 mb-4">Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(stats).map(([key, value]) => (
                  <div key={key} className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-violet-400">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Card */}
            <div className="bg-gray-900 rounded-lg border border-violet-700/30 p-6 transition-transform transform hover:scale-107">
              <h2 className="text-lg font-semibold text-violet-300 mb-4">Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <div className="text-gray-200 font-medium">{achievement.name}</div>
                      <div className="text-sm text-gray-400">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Activity & Progress */}
          <div className="col-span-2 space-y-6">
            {/* Recent Activity */}
            <div className="bg-gray-900 rounded-lg border border-violet-700/30 p-6  transition-transform transform hover:scale-10">
              <h2 className="text-lg font-semibold text-violet-300 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      {activity.type === 'solved' && <Code className="w-5 h-5 text-green-400" />}
                      {activity.type === 'submitted' && <Book className="w-5 h-5 text-blue-400" />}
                      {activity.type === 'bookmarked' && <Bookmark className="w-5 h-5 text-yellow-400" />}
                      <div>
                        <div className="text-gray-200">
                          {activity.type === 'solved' ? 'Solved' : activity.type === 'submitted' ? 'Attempted' : 'Bookmarked'}{' '}
                          <span className="font-medium">{activity.problem}</span>
                        </div>
                        <div className="text-sm text-gray-400">{activity.date}</div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded text-sm ${
                      activity.difficulty === 'Easy' ? 'bg-green-500/20 text-green-300' :
                      activity.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {activity.difficulty}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solve History Calendar (reuse ActivityCalendar component) */}
            <div className="bg-gray-900 rounded-lg border border-violet-700/30 p-6  transition-transform transform hover:scale-103">
              <h2 className="text-lg font-semibold text-violet-300 mb-4">Solving History</h2>
              {/* Add ActivityCalendar component here */}
              <ProgressCalendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;