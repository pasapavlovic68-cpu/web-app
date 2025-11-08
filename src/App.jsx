import { motion } from 'framer-motion';

const fadeDown = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <div className="min-h-screen bg-flowpay-gradient flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeDown}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="rounded-full backdrop-blur-xl bg-white/50 shadow-capsule px-10 py-4"
        >
          <p className="text-2xl font-semibold tracking-tight text-slate-800">
            Welcome to FlowPay
          </p>
        </motion.div>

        <motion.button
          type="button"
          initial="hidden"
          animate="visible"
          variants={fadeDown}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          whileHover={{ y: -4, boxShadow: '0 28px 60px rgba(52, 199, 89, 0.45)', filter: 'brightness(1.05)' }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-3 rounded-full bg-gradient-to-b from-flowpay-green to-flowpay-green-light text-white font-semibold text-lg shadow-flowpay focus:outline-none focus-visible:ring-4 focus-visible:ring-flowpay-green/40 transition-transform duration-200"
        >
          Start
        </motion.button>
      </div>
    </div>
  );
}

export default App;

