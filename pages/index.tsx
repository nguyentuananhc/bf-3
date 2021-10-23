import { Box, OrbitControls } from "@react-three/drei";
import { Canvas, useStore } from "@react-three/fiber";
import { styled } from "@stitches/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { Suspense, useEffect, useRef } from "react";
import { PanelLegend, Interface, Text, Button, Panel } from "../components/hud";
import styles from "../styles/Home.module.css";
import Effects from "../components/Effects";
import Ribbon from "../components/Ribbon";
import { useSpring, animated } from "@react-spring/three";

const Main = styled("main", {
  width: "100vw",
  height: "100vh",
});

const Overlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  color: "white",
  maxWidth: "480px",
});

const RandomRotateGroup = ({ children }: { children: any }) => {
  const [{ rotation, scale }, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
  }));
  // useEffect(() => {
  //   function doThing() {
  //     api.start({
  //       rotation: [
  //         2 * Math.PI * Math.random(),
  //         2 * Math.PI * Math.random(),
  //         2 * Math.PI * Math.random(),
  //       ],
  //     });
  //     setTimeout(doThing, 2000);
  //   }
  //   doThing();
  // }, [api]);

  return <animated.group rotation={rotation}>{children}</animated.group>;
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Canvas camera={{ position: [15, 15, 15] }}>
          <color attach="background" args={["black"]} />
          {/* <Sky azimuth={1} inclination={0.1} distance={1000} /> */}
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <pointLight position={[30, 0, 0]} color="blue" intensity={10} />
            <RandomRotateGroup>
              <Ribbon id={1} color="#7b505c" />
              <Ribbon id={64} color="#E8AE3B" />
              <Ribbon id={256} color="#E8AE3B" />
              <Ribbon id={512} color="#E8AE3B" />
              <Ribbon id={128} color="#e4d6cf" />
            </RandomRotateGroup>
            <Effects />
          </Suspense>
          <OrbitControls
            minPolarAngle={Math.PI / 10}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </Main>

      <Overlay>
        <Interface>
          <Panel>
            <PanelLegend>Welcome</PanelLegend>
            <Text>Hi, I’m Ben</Text>
            <br />

            <Text>
              I&apos;m a UI Engineer, designer, generative artist and
              independent game developer living in Brisbane, Australia.
            </Text>
            <br />

            <Text>
              I make powerful, intuitive and joyful software using the tools I
              love.
            </Text>
            <br />

            <Text>
              You&apos;ll find me working at the intersection of art,
              technology, psychology, philosophy and human connection.
            </Text>
          </Panel>
          <Panel>
            <PanelLegend>About Me</PanelLegend>
            <Text>You can find me around the internet:</Text>
            <Button>
              <code>[C]</code> cv
            </Button>
            <br />
            <Button>
              <code>[T]</code> twitter
            </Button>
            <br />
            <Button>
              <code>[G]</code> github
            </Button>
            <br />
            <Button>
              <code>[V]</code> twitch
            </Button>
            <br />
            <Button>
              <code>[A]</code> are.na
            </Button>
            <br />
          </Panel>
        </Interface>
      </Overlay>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
