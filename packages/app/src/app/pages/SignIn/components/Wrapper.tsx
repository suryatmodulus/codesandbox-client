import React from 'react';
import { Element, ThemeProvider } from '@codesandbox/components';
import { css } from '@styled-system/css';
import { motion, AnimatePresence } from 'framer-motion';

export const Wrapper = ({
  children,
  oneCol,
}: {
  children: React.ReactNode;
  oneCol?: boolean;
}) => (
  <ThemeProvider>
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        <Element
          css={css({
            backgroundColor: oneCol ? 'grays.800' : 'white',
            border: 1,
            borderStyle: 'solid',
            borderColor: 'grays.500',
            boxSizing: 'border-box',
            boxShadow: '2',
            borderRadius: 8,
            boxSixing: 'border-box',

            color: oneCol ? 'white' : 'grays.800',
            display: 'grid',
            gridTemplateColumns: oneCol ? '1fr' : '50% 50%',
            overflow: 'hidden',
            margin: 'auto',

            '@media screen and (min-width: 768px)': {
              height: 400,
              width: 670,
              maxWidth: '80vw',
            },
            '@media screen and (max-width: 779px)': {
              gridTemplateColumns: '1fr',
            },
          })}
        >
          {children}
        </Element>
      </motion.div>
    </AnimatePresence>
  </ThemeProvider>
);
