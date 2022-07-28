import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback yet!</p>;
  }

  return isLoading ? (
    <div className='loader' />
  ) : (
    <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem key={item.id} item={item} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default FeedbackList;
