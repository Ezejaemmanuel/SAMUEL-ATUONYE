import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, Cpu, Code, PieChart, Database, Command } from 'lucide-react';

const Showcase3D = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Simplified animations
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2]);

  // 3D rotating cube with canvas - with optimized rendering
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    const width = (canvas as HTMLCanvasElement).width;
    const height = (canvas as HTMLCanvasElement).height;
    const centerX = width / 2;
    const centerY = height / 2;

    // Reduced cube size and complexity
    const cubeSize = 70;
    const vertices = [
      // Front face
      { x: -cubeSize, y: -cubeSize, z: cubeSize },
      { x: cubeSize, y: -cubeSize, z: cubeSize },
      { x: cubeSize, y: cubeSize, z: cubeSize },
      { x: -cubeSize, y: cubeSize, z: cubeSize },

      // Back face
      { x: -cubeSize, y: -cubeSize, z: -cubeSize },
      { x: cubeSize, y: -cubeSize, z: -cubeSize },
      { x: cubeSize, y: cubeSize, z: -cubeSize },
      { x: -cubeSize, y: cubeSize, z: -cubeSize }
    ];

    const edges = [
      // Front face
      [0, 1], [1, 2], [2, 3], [3, 0],
      // Back face
      [4, 5], [5, 6], [6, 7], [7, 4],
      // Connecting edges
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];

    let angleX = 0;
    let angleY = 0;

    function project(point3D: { x: number, y: number, z: number }) {
      const depth = 400;
      const projectedPoint = {
        x: (point3D.x * depth) / (depth + point3D.z) + centerX,
        y: (point3D.y * depth) / (depth + point3D.z) + centerY
      };
      return projectedPoint;
    }

    function rotateX(point: { x: number, y: number, z: number }, angle: number) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: point.x,
        y: point.y * cos - point.z * sin,
        z: point.y * sin + point.z * cos
      };
    }

    function rotateY(point: { x: number, y: number, z: number }, angle: number) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: point.x * cos - point.z * sin,
        y: point.y,
        z: point.x * sin + point.z * cos
      };
    }

    // Slower animation speed
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Reduced rotation speed
      angleX += 0.003;
      angleY += 0.005;

      const rotatedVertices = vertices.map(vertex => {
        let rotated = rotateY(vertex, angleY);
        rotated = rotateX(rotated, angleX);
        return rotated;
      });

      const projectedVertices = rotatedVertices.map(vertex => project(vertex));

      // Draw edges
      ctx.strokeStyle = '#00ff99';
      ctx.lineWidth = 2;

      edges.forEach(edge => {
        const start = projectedVertices[edge[0]];
        const end = projectedVertices[edge[1]];

        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      });

      // Draw vertices
      ctx.fillStyle = '#00ff99';
      projectedVertices.forEach(vertex => {
        ctx.beginPath();
        ctx.arc(vertex.x, vertex.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
      rafRef.current = requestAnimationFrame(animate);
    }

    animate();
    return () => {
      // Clean up animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950 to-black"></div>

      <div ref={containerRef} className="container relative z-10 px-6 mx-auto position-relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-tech">
            Next-Gen <span className="text-primary">Tech Solutions</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Exploring the intersection of design, development, and innovation to create immersive digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-col space-y-6"
            style={{ y, opacity }}
          >
            <div className="glass-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all card-3d">
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-primary/10 mr-4">
                  <Box className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-tech">3D Visualization</h3>
                  <p className="text-gray-400">Creating immersive 3D experiences that bring your concepts to life with engaging visual interactions.</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all card-3d">
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-primary/10 mr-4">
                  <Cpu className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-tech">AI Integration</h3>
                  <p className="text-gray-400">Leveraging artificial intelligence to create smarter, more intuitive applications and solutions.</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all card-3d">
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-primary/10 mr-4">
                  <Command className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-tech">Extended Reality</h3>
                  <p className="text-gray-400">Building AR and VR applications that push the boundaries of digital interaction and immersion.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative w-full h-80 perspective-1000">
              <div className="absolute inset-0 flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  width={300}
                  height={300}
                  className="max-w-full"
                ></canvas>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-primary font-tech text-xl opacity-30 text-center">
                  Innovate • Create • Transform
                </div>
              </div>

              {/* Reduced glowing orbs */}
              <motion.div
                className="absolute w-20 h-20 rounded-full bg-primary/10 filter blur-xl"
                animate={{
                  x: [30, -30, 30],
                  y: [10, -10, 10],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{ left: '60%', top: '30%' }}
              />

              <motion.div
                className="absolute w-16 h-16 rounded-full bg-primary/5 filter blur-xl"
                animate={{
                  x: [-20, 20, -20],
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{ left: '20%', top: '50%' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase3D;
