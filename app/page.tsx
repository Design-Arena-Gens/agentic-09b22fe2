'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenes = [
    { duration: 3000, name: 'Scene 1: Stressed Face' },
    { duration: 3000, name: 'Scene 2: Therapy Room' },
    { duration: 6000, name: 'Scene 3: Shirodhara Therapy' },
    { duration: 5000, name: 'Scene 4: Head Massage' },
    { duration: 3000, name: 'Scene 5: Relaxed Face' },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    if (currentScene >= scenes.length) {
      setIsPlaying(false);
      setCurrentScene(0);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentScene(prev => prev + 1);
    }, scenes[currentScene].duration);

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying]);

  const startVideo = () => {
    setCurrentScene(0);
    setIsPlaying(true);
  };

  const resetVideo = () => {
    setCurrentScene(0);
    setIsPlaying(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <AnimatePresence mode="wait">
            {!isPlaying && currentScene === 0 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.intro}
              >
                <h1 className={styles.title}>Bo Tree Ayurveda</h1>
                <p className={styles.subtitle}>Experience the ancient healing art of Shirodhara</p>
                <button onClick={startVideo} className={styles.playButton}>
                  ▶ Play Reel
                </button>
              </motion.div>
            )}

            {isPlaying && currentScene === 0 && (
              <motion.div
                key="scene1"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className={styles.scene}
              >
                <div className={styles.scene1}>
                  <motion.div
                    className={styles.stressedFace}
                    animate={{
                      scale: [1, 1.1, 1.1],
                      filter: ['brightness(0.6)', 'brightness(0.5)', 'brightness(0.6)']
                    }}
                    transition={{ duration: 3, times: [0, 0.5, 1] }}
                  >
                    <div className={styles.faceOverlay}>
                      <div className={styles.eyes}>
                        <div className={styles.eye}></div>
                        <div className={styles.eye}></div>
                      </div>
                      <motion.div
                        className={styles.tensionLines}
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                  <div className={styles.vignette}></div>
                  <motion.div
                    className={styles.sceneText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Daily stress weighs heavy
                  </motion.div>
                </div>
              </motion.div>
            )}

            {isPlaying && currentScene === 1 && (
              <motion.div
                key="scene2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className={styles.scene}
              >
                <div className={styles.scene2}>
                  <motion.div
                    className={styles.therapyRoom}
                    animate={{ scale: [1, 1.05] }}
                    transition={{ duration: 3 }}
                  >
                    <div className={styles.goldenLight}></div>
                    <div className={styles.ayurvedicDecor}>
                      <div className={styles.plant}></div>
                      <div className={styles.plant}></div>
                      <div className={styles.candles}>
                        <div className={styles.candle}></div>
                        <div className={styles.candle}></div>
                        <div className={styles.candle}></div>
                      </div>
                    </div>
                    <motion.div
                      className={styles.sceneText}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Enter the healing sanctuary
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {isPlaying && currentScene === 2 && (
              <motion.div
                key="scene3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={styles.scene}
              >
                <div className={styles.scene3}>
                  <div className={styles.shirodhara}>
                    <motion.div
                      className={styles.woman}
                      animate={{ opacity: [0.9, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <div className={styles.womansHead}>
                        <div className={styles.closedEyes}></div>
                      </div>
                    </motion.div>

                    <div className={styles.oilStream}>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={styles.oilDrop}
                          initial={{ y: -50, opacity: 0 }}
                          animate={{
                            y: 200,
                            opacity: [0, 1, 1, 0.5, 0],
                            scale: [0.8, 1, 1.2, 1.5, 2]
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      ))}
                    </div>

                    <motion.div
                      className={styles.herbalGlow}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    <motion.div
                      className={styles.sceneText}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      Sacred Shirodhara therapy
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {isPlaying && currentScene === 3 && (
              <motion.div
                key="scene4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={styles.scene}
              >
                <div className={styles.scene4}>
                  <div className={styles.massage}>
                    <div className={styles.head}>
                      <div className={styles.scalp}></div>
                      <motion.div
                        className={styles.hand}
                        animate={{
                          x: [-20, 20, -20],
                          y: [-10, 10, -10],
                          rotate: [-5, 5, -5]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className={styles.hand}
                        style={{ left: '60%' }}
                        animate={{
                          x: [20, -20, 20],
                          y: [-10, 10, -10],
                          rotate: [5, -5, 5]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      />
                    </div>

                    <div className={styles.herbalDecor}>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={styles.herbalParticle}
                          initial={{
                            x: Math.random() * 300 - 150,
                            y: 400,
                            opacity: 0
                          }}
                          animate={{
                            y: -100,
                            opacity: [0, 0.8, 0],
                            rotate: 360
                          }}
                          transition={{
                            duration: 5,
                            delay: i * 0.8,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </div>

                    <motion.div
                      className={styles.sceneText}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Gentle healing touch
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {isPlaying && currentScene === 4 && (
              <motion.div
                key="scene5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={styles.scene}
              >
                <div className={styles.scene5}>
                  <motion.div
                    className={styles.relaxedFace}
                    animate={{
                      filter: ['brightness(0.8)', 'brightness(1.1)', 'brightness(1)']
                    }}
                    transition={{ duration: 3 }}
                  >
                    <div className={styles.glowingFace}>
                      <div className={styles.peacefulEyes}></div>
                      <motion.div
                        className={styles.smile}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className={styles.wellnessGlow}
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={styles.floatingParticle}
                      initial={{
                        x: Math.random() * 300 - 150,
                        y: 500,
                        opacity: 0,
                        scale: 0
                      }}
                      animate={{
                        y: -100,
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0.5],
                        rotate: 360
                      }}
                      transition={{
                        duration: 4,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  ))}

                  <motion.div
                    className={styles.sceneText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Transformed. Renewed. Balanced.
                  </motion.div>

                  <motion.div
                    className={styles.logo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <h2>Bo Tree Ayurveda</h2>
                    <p>Ancient Wisdom. Modern Wellness.</p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {!isPlaying && currentScene >= scenes.length && (
              <motion.div
                key="end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.intro}
              >
                <h2 className={styles.title}>Experience Complete</h2>
                <button onClick={startVideo} className={styles.playButton}>
                  ↺ Replay
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {isPlaying && (
            <motion.div
              className={styles.progressBar}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{
                duration: scenes.reduce((acc, scene) => acc + scene.duration, 0) / 1000,
                ease: "linear"
              }}
            />
          )}
        </div>

        {isPlaying && (
          <button onClick={resetVideo} className={styles.resetButton}>
            ■ Stop
          </button>
        )}
      </div>
    </main>
  );
}
