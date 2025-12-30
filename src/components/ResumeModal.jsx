import { motion, AnimatePresence } from "framer-motion";

const ResumeModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white w-[90%] h-[90%] rounded-lg relative overflow-hidden"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 z-10 text-xl font-bold"
                        >
                            ✕
                        </button>

                        {/* PDF Viewer */}
                        <iframe
                            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                            className="w-full h-full"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
