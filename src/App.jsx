import React, { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button, Image, Link } from '@chakra-ui/react';

const App = () => {
  const [images, setImages] = useState([]);
  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = reader.result;


        setImages(prevImages => {
          const updatedImages = [...prevImages, newImage];


          localStorage.setItem('images', JSON.stringify(updatedImages));

          return updatedImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };


  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('images'));
    if (storedImages) {
      setImages(storedImages);
    }
  }, []);


  return (
    <div className="flex justify-center p-6 bg-gray-800 min-h-screen">
      <div className="grid grid-cols-2 gap-4 max-w-7xl">

        <div className="bg-gray-700 rounded-lg p-6">
          <p className="text-white text-center">
            This website is only for laptop view as mentioned in the assignment.
          </p>
        </div>


        <div className="space-y-4">

          <Box className="rounded-lg bg-gray-700 p-4">
            <Tabs variant="soft-rounded" colorScheme="gray">
              <TabList className="flex self-stretch justify-evenly mb-4 bg-black rounded-2xl">
                <Tab _selected={{ color: "white", bg: "gray.500" }}>About Me</Tab>
                <Tab _selected={{ color: "white", bg: "gray.500" }}>Experiences</Tab>
                <Tab _selected={{ color: "white", bg: "gray.500" }}>Recommended</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p className="text-white">Hello,I am Priyanshi Jain, a third-year B.Tech student at SKIT Jaipur, specializing in Full Stack Development. I am proficient in C++, Python, and have experience with the Django framework, along with front-end tools like React and back-end technologies like Node.js. I’m seeking internship opportunities to apply my skills in real-world projects and contribute to a dynamic team.</p>
                </TabPanel>
                <TabPanel>
                  <p className="text-white">
                    SKIT Campus Program<br/>
                    Role: Web Development Intern
                    During my tenure at the SKIT Campus Program, I gained hands-on experience with web development technologies, including HTML, CSS, and JavaScript. My responsibilities involved creating and refining web interfaces to ensure a seamless user experience.
                  </p>
                  <p className="text-white">Bluestock Fintech<br/>
                    Role: Web Development Intern
                    At Bluestock Fintech, I completed a two-month internship where I was involved in both frontend and backend development. My frontend work included using HTML, CSS, and JavaScript to build responsive web applications. On the backend side, I utilized Python and Django for server-side development, and worked with SQLite for database management.</p>
                </TabPanel>
                <TabPanel>
                  <p className="text-white">
                    I recommend my projects:
                  </p>
                  <ul className="list-disc ml-4">
                    <li><Link color="teal.400" href="https://github.com/jainnPriyanshii/Mysterymessage">Mystery Message</Link></li>
                    <li><Link color="teal.400" href="https://github.com/jainnPriyanshii/RENAMEX">RENAMEX</Link></li>
                    <li><Link color="teal.400" href="https://jainnpriyanshii.github.io/TODO-List/">TODO App</Link></li>
                    <li><Link color="teal.400" href="https://github.com/jainnPriyanshii/E-com">Ecommerce site</Link></li>
                  </ul>
                  <p className="text-white mt-2">For more, check my <Link color="teal.400" href="https://github.com/jainnPriyanshii">Github</Link></p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          {/* {Gallery */}
          <Box className="rounded-lg bg-gray-700 p-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-white">Gallery</p>
              <div className="space-x-4">
                <Button size="sm" colorScheme="gray">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    + ADD IMAGE
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleAddImage}
                  />
                </Button>
                <Button size="sm" colorScheme="gray">&larr;</Button>
                <Button size="sm" colorScheme="gray">&rarr;</Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {images.length > 0 ? (
                images.map((img, index) => (
                  <Image key={index} src={img} alt={`Uploaded ${index}`} boxSize="150px" objectFit="cover" />
                ))
              ) : (
                <p className="text-white col-span-3">No images added yet.</p>
              )}
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default App;
