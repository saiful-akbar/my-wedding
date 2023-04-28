export const transition = {
  duration: 1.5,
  ease: [0.6, 0.01, 0, 0.95],
};

export const parentVariants = {
  hidden: false,
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    transition: {
      when: "afterChildren",
    },
  },
};

export default {
  transition,
  parentVariants,
};
