import React from 'react';
import { 
  Clock, 
  Target, 
  Trophy, 
  TrendingUp, 
  BookOpen, 
  Brain,
  Calendar,
  Award,
  Activity,
  CheckCircle,
  Star,
  Zap,
  BarChart3,
  Users,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your learning progress overview.</p>
      </div>

      {/* Top Row - Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Study Time */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-gray-500">Today</span>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-gray-900">2h 45m</p>
            <p className="text-sm text-gray-600">Study Time</p>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15% from yesterday
            </div>
          </div>
        </div>

        {/* Current Streak */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm text-gray-500">Days</span>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-600">Study Streak</p>
            <div className="flex items-center text-xs text-orange-600">
              <Trophy className="w-3 h-3 mr-1" />
              Personal best!
            </div>
          </div>
        </div>

        {/* Goals Progress */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Target className="w-6 h-6 text-teal-600" />
            </div>
            <span className="text-sm text-gray-500">This Week</span>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-gray-900">75%</p>
            <p className="text-sm text-gray-600">Goals Complete</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-teal-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        {/* Overall Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-gray-500">Average</span>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-gray-900">87%</p>
            <p className="text-sm text-gray-600">Quiz Accuracy</p>
            <div className="flex items-center text-xs text-purple-600">
              <Star className="w-3 h-3 mr-1" />
              Excellent performance
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Performance & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Study Time Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Study Time Breakdown</h3>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Today</span>
              <span className="font-medium text-gray-900">2h 45m</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">This Week</span>
              <span className="font-medium text-gray-900">18h 30m</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">This Month</span>
              <span className="font-medium text-gray-900">72h 15m</span>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Weekly Goal</span>
                <span className="text-teal-600 font-medium">20h (93%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-teal-600 h-2 rounded-full" style={{ width: '93%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Quiz Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Quiz Performance</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Mathematics Quiz</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              <span className="text-green-600 font-bold">95%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Physics Quiz</p>
                  <p className="text-sm text-gray-600">Yesterday</p>
                </div>
              </div>
              <span className="text-blue-600 font-bold">82%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                <div>
                  <p className="font-medium text-gray-900">Chemistry Quiz</p>
                  <p className="text-sm text-gray-600">2 days ago</p>
                </div>
              </div>
              <span className="text-yellow-600 font-bold">78%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row - Achievements & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Badges & Achievements */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
            <Award className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-600">7-Day Streak</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-600">Quiz Master</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-600">Note Taker</p>
            </div>
          </div>
        </div>

        {/* Topic Mastery */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Topic Mastery</h3>
            <Star className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Calculus</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="text-sm font-medium text-green-600">90%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Physics</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <span className="text-sm font-medium text-blue-600">75%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Chemistry</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <span className="text-sm font-medium text-yellow-600">65%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Goals */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Weekly Goals</h3>
            <Target className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Complete 5 quizzes</p>
                <p className="text-xs text-gray-500">5/5 completed</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 border-2 border-teal-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Study 20 hours</p>
                <p className="text-xs text-gray-500">18.5/20 hours</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Review 100 flashcards</p>
                <p className="text-xs text-gray-500">67/100 cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Row - Recent Activity & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Reviewed Calculus flashcards</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Completed Physics Quiz</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Created new study notes</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Joined study group discussion</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recommended Next Steps</h3>
            <Zap className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Review Chemistry Basics</h4>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 mb-3">Your chemistry scores suggest reviewing fundamental concepts.</p>
              <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors">
                Start Review
              </button>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Practice More Flashcards</h4>
                <ArrowRight className="w-4 h-4 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 mb-3">You're close to your flashcard goal. Keep going!</p>
              <button className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 transition-colors">
                Review Cards
              </button>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-100">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Join Study Group</h4>
                <ArrowRight className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 mb-3">Connect with peers studying similar topics.</p>
              <button className="text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-colors">
                Find Groups
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;