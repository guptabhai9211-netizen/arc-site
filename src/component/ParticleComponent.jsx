 import React, { useCallback } from "react";
import { Particles } from "@tsparticles/react"; // ✅ updated import
import { loadFull } from "tsparticles";

function ParticleComponent() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: ["#FF9933", "#FFFFFF", "#138808"], // saffron, white, green 🇮🇳
            },
            links: {
              enable: true,
              color: "#000080", // navy blue
              distance: 120,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
              bounce: false,
            },
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: 0.7,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
                sync: false,
              },
            },
            shape: {
              type: ["circle", "triangle"],
              options: {
                polygon: {
                  sides: 5,
                },
                star: {
                  sides: 5,
                },
              },
            },
            size: {
              value: { min: 2, max: 5 },
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
                sync: false,
              },
            },
            wobble: {
              enable: true,
              distance: 10,
              speed: 10,
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: 0.05,
                opacity: 1,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default ParticleComponent;
