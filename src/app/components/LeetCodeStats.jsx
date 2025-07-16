"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaMedal, FaTrophy } from "react-icons/fa";

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("https://leetcode-stats-api.herokuapp.com/user6786icd");
        if (!res.ok) throw new Error("Failed to fetch stats");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchStats();
  }, []);

  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!stats) {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-4 flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white/80 text-lg">Fetching LeetCode Stats...</p>
      </div>
    </section>
  );
}

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-4 sm:px-8 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-pink-500 mb-10">
          LeetCode Stats
        </h2>

        <p className="text-center text-base sm:text-lg mb-10 text-white/80">
          <span className="text-pink-400 font-semibold">@{stats.username}</span> — LeetCode lover solving real-world problems!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatBox icon={<FaStar />} label="Total Solved" value={stats.totalSolved} />
          <StatBox icon={<FaMedal />} label="Easy" value={`${stats.easySolved} / ${stats.totalEasy}`} />
          <StatBox icon={<FaMedal />} label="Medium" value={`${stats.mediumSolved} / ${stats.totalMedium}`} />
          <StatBox icon={<FaTrophy />} label="Hard" value={`${stats.hardSolved} / ${stats.totalHard}`} />
          <StatBox icon={<FaStar />} label="Global Ranking" value={`#${stats.ranking}`} />
        </div>
      </motion.div>
    </section>
  );
};

const StatBox = ({ icon, label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-[#141414] to-[#1f1f1f] p-6 rounded-2xl border border-white/10 shadow-md hover:shadow-pink-500/20 transition-all text-center"
  >
    <div className="text-pink-400 text-4xl mb-3 flex justify-center">{icon}</div>
    <p className="text-lg font-medium text-white/80">{label}</p>
    <p className="text-2xl font-bold text-white mt-1">{value}</p>
  </motion.div>
);

export default LeetCodeStats;
