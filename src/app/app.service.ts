import { Injectable } from '@angular/core';
import { BehaviorSubject, count, Observable} from 'rxjs';
import { Card } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // getMessage = this.message.asObservable();
  sevtCard:Card = new Card(
    "Solar Electric Vehicle Team (SEVT)",
    "assets/Gemini.JPG",
    `Co-leading the Electrical Engineering subteam of SEVT, a student-run group that designs, builds, and races a solar-powered vehicle every 2 years at the American Solar Challenge`,
    "/sevt",
    "Fall 2022 - Present",
    ["C", "C language", "C code", "C coding langauge", "C programming language","Motors", "Embedded systems", "Firmware", "Hardware", "High voltage",
      "Embedded software", "Embedded firmware", "DSP","CAN",
         "Digital Signal Processing", "UART", "Controller Area Network", "Telemetry",
         "Wireless", "Infotainment", "Electrical", "IsoSPI", "SPI", "PyQT", "GPS","Python", "User Interface", "UI", "GitHub", "Git"
     ]
  );

  ebayCard:Card = new Card(
    "eBay Software Engineering Intern",
    "assets/ebaySign.jpg",
    "Developed AI tool using LLMs to speed up manual process by 30% and improve eBay's seller experience.",
    "/ebay",
    "June 2024 - September 2024",
    ["Software", "Python", "Streamlit", "LLM", "Machine Learning",
      "Documentation", "UI", "Unit Test", "Docker", "Kubernetes", "GitHub", "Git"

    ]
  );

  wordSearchCard:Card = new Card(
    "Word Search Solver",
    "assets/SolvedWordSearch.png",
    `Designed a web app, including an automated test suite, grammar, parser, and abstract data types to take word search puzzles from the user and solve them graphically`,
    "/wordSearch",
    "Summer 2024",
    ["Software", "Typescript", "Web dev", "Web development", "Web design",
      "Server", "Client", "Server-client", "GitHub", "Git"
    ]
  );

  arcturusCard:Card = new Card(
    "Arcturus (Autonomous Robotics Team)",
    "assets/Buoys.png",
    "During Fall 2023, we needed image data to fine tune a machine learning model that our robot used to detect buoys. Due to limited resources, we could not get as many pictures as we needed, so I wrote a program that generated 3D buoy objects, placed them in an environment that resembled the ocean, and rotated them while taking hundreds of screenshots. This method generated over 1000 unique data points we could use to train our robot before getting access to real buoy data. ",
    "",
    "Spring 2023 - Spring 2024",
    ["ROS", "Docker", "Python", "Fine tuning", "Machine Learning", "Computer vision",
      "Robotics", "GitHub", "Git"
    ]

  );

  osCard:Card = new Card(
    "Computation Structures - Operating System Design",
    "assets/OS.jpg",
    `Coded in C and Assembly to implement the following features of a small operating system:
Context switching between processes by accessing registers
Switching between user and kernel mode
Addressing exceptions using a trap handler
Conversions between virtual and physical memory
Syscalls`,
    "",
    "Fall 2023",
    ["C", "C language", "C code", "C coding langauge", "C programming language", "OS", "Operating System", "Assembly", "Virtual Memory", "Physical Memory",
      "Context Switching", "Thread", "Threads", "Multithreading", "GitHub", "Git"

    ]
  );

  procCard:Card = new Card(
    "Computation Structures - Processor Design",
    "assets/Processor.jpg",
    `Coded in Hardware Description Language (HDL) to design a RISC-V Central Processing Unit (CPU) with: 
    Arithmetic Logic Unit (ALU) for executing mathematical operations on numbers using boolean logic gates (AND OR, NOT, XOR)
    A four stage pipeline to optimize throughput
    Data and instruction caches with stall behavior while accessing memory
    Bypassing across pipeline stages to prevent unnecessary stalling`,
    "",
    "Fall 2023",
    ["C", "C language", "C code", "C coding langauge", "C programming language", "Virtual Memory", "Physical Memory", "Hardware Description Language",
      "HDL", "Caching", "Cache", "Arithmetic Logic Unit", "ALU", "Boolean Algebra", "Hardware",
      "Bypassing", "Stalling", "Processor", "CPU", "Central Processing Unit", "Branching", "GitHub", "Git"

    ]
  );

  ecCard:Card = new Card(
    "Encoding Culture - Final Project",
    "assets/Paris.jpg",
    `Encoding Culture was a class that focused on applying computer science principles to humanistic research goals. We learned about text, audio, and image analysis, how physical media is digitally encoded, and several machine learning Python tools. For our final project, another student and I worked on an AI querying system for art museums that could recommend art pieces to users based on text descriptions.`,
    "/ec-project",
    "Spring 2023",
    ["Machine Learning", "Computer Vision", "Roboflow", "K-means", "K means",
      "Fine tuning", "Fine tune", "Python", "GitHub", "Git"
    ]
  );

  lispCard:Card = new Card(
    "Fundamentals of Programming - LISP Intepreter",
    "assets/MoreCode.jpg",
    "Used Python coding language to design interpeter for LISP. Implementing the interpreter involved object-oriented programming, splitting the program into several classes that we used to abstract away complicated details. We also designed a tokenizer, recursive descent parser, function frames, symbolic expression evaluation, branches such as if statements, and list processing using the car and cdr architecture.",
    "",
    "Spring 2023",
    ["Python","Lisp","Interpreter", "Compiler", "Class", "Polymorphism", "Function frames", "Function frame", 
      "Parser", "Recursive Descent Parser", "Tokenizer", "Symbolic Expression evaluation", "Car", "cdr", "GitHub", "Git"
    ]
  );

  asciiCard:Card = new Card(
    "Programming in C and Assembly - ASCII Lab",
    "assets/ScrollingText.mp4",
    `For this project, we set up a circuit to connect a microcontroller to several switches, buttons, and an LED board. I programmed the microcontroller to read the inputs from the switches and buttons, where the positions of the switches corresponded to a binary number and the button indicated that we wanted to send that number to the controller. We then displayed the ascii character described by that number on the LED board. We also implemented code to make the text on the LED board scroll, as can be seen in the video.`,
    "",
    "Fall 2022",
    [
      "C", "C language", "C code", "C coding langauge", "C programming language", "Circuit", "Firmware", "GPIO", "Embedded Systems", "GitHub", "Git"
    ]
  );

  snekCard:Card = new Card(
    "Fundamentals of Programming - Snekoban Game Solver",
    "assets/Grid.jpg",
    `Snekoban was our version of a game where you play as a character that is trying to move boxes around a grid into certain positions. To make a solver, we represented each state as a node in a graph and used a breadth-first-search (BFS) to solve the game in the minimum number of moves. Our program had to be optimized to save the game's state and run the BFS algorithm in a limited amount of time.`,
"",
"Spring 2023",
    [
      "Python", "Breadth First Search", "BFS", "Classes", "Optimization", "Graphs", "GitHub", "Git"
    ]
  );

  pgeCard:Card = new Card(
    "Pacific Gas & Electric Company - Information Technology Intern",
    "assets/PG&E.jpg",
    `Developed an application with a partner in SQL and Angular to automate and streamline the employee onboarding process
Designed unit tests in C# to validate backend code, ensuring functionality during launch of onboarding application`,
    "",
    "June 2023 - August 2023",
    ["Angular", "Typescript", "SQL", "C#", "Web development", "Web design","GitHub", "Git"]
  );

  fulCard:Card = new Card(
    "Friends of The Underline - Technology Intern",
    "assets/MiamiMetro.jpg",
    `Automated online data collection and analysis of thousands of user statistics by developing and documenting Python scripts
Empowered FUL to convey the success of their linear park to potential investors by generating data visualizations`,
    "",
    "January 2023 - February 2023",
    [
      "Python", "BeautifulSoup4", "Google API", "Openpyxl", "Excel", "Automation", "Mapping","GitHub", "Git"
    ]
  );

  holoCard:Card = new Card(
    "3D Hologroup - Marketing Intern",
    "assets/VRHeadset.jpg",
    `Enhanced the launch of a new augmented reality speech-generating device by assembling market and consumer data
Boosted awareness of the company by writing press releases and designing marketing sheets`,
"",
"January 2021 - August 2022",
  [
    "Marketing", "Excel", "Spreadsheets", "GitHub", "Git"
  ]
  );

  treeCard:Card = new Card(
    "Tree Algorithm Visualizer",
    "assets/TreeTraversal.mp4",
    "Used Python Tkinter package to design a UI that recursively colors tree in in-order, pre-order, and post-order traversals",
    "",
    "Fall 2023",
    [
      "Python", "Tkinter", "UI", "User Interface", "Recursion", "Tree", "Tree traversal", "Graphs",
      "Algorithms", "GitHub", "Git"
    ]
  );

  bmsCard:Card = new Card(
    "Battery Management System (BMS)",
    "assets/Headboard.jpg",
    `Our headboard, the green PCB, serves as our BMS and has two main roles: Monitoring the state of the car's electronics and controlling relays to supply power. It tracks the current being drawn by and supplied to the motors, solar panels, and charger. I validated its current measurements by comparing the output of our I2C library and the current we were drawing/delivering using a DC load. Having accurate current values allows us to emergency shut off the car in case currents get dangerously high.
  The headboard is also responsible for controlling the precharge and high power relays that connect to the motors, solar panels, and charger, which I also tested using its I/O pins and contactors.`,
  "",
  "",
    ["C", "C language", "C code", "C coding langauge", "C programming language","Battery management system", "BMS", "Embedded systems", "Firmware", "Hardware", "High voltage",
      "Relays", "Contactors", "Embedded software", "Embedded firmware", "IsoSPI", "DSP", "CAN",
      "Digital Signal Processing", "UART", "Controller Area Network", "SPI","GitHub", "Git"
    ]
  );

  cellCard:Card = new Card(
    "Cellboards",
    "assets/SingleCellboardOnBattery.jpg",
    `We have 8 cellboards on our battery, each of which is responsible for measuring the voltage and temperature of a sector of the battery. They also balance our battery so all the cells are at roughly equal voltages.
  I set up and debugged the IsoSpi connection between the headboard and the cellboards, allowing them to communicate while the car was operational. The headboard uses the values from the cellboards to emergency shut off the car if our battery becomes dangerously hot or has too much/too little voltage.`,
  "",
  "",
  ["C", "C language", "C code", "C coding langauge", "C programming language","Battery management system", "BMS", "Embedded systems", "Firmware", "Hardware", "High voltage",
   "Embedded software", "Embedded firmware", "IsoSPI", "DSP","CAN",
      "Digital Signal Processing", "UART", "Controller Area Network", "SPI","GitHub", "Git"
  ]
  );

  motorCard:Card = new Card(
    "Motors",
    "assets/DualMotorSetup.jpg",
    `I configured a wavesculptor motor controller
  to operate with a Mitsuba D3 motor, wrote new controller code using CAN messages from one of our PCBs, and installed the motor controllers on the car. I also wrote code for receiving telemetry from the motors, which includes information about their velocities, temperatures, and error states.`,
  "",
  "",
  ["C", "C language", "C code", "C coding langauge", "C programming language","Motors", "Embedded systems", "Firmware", "Hardware", "High voltage",
    "Embedded software", "Embedded firmware", "DSP","CAN",
       "Digital Signal Processing", "UART", "Controller Area Network","GitHub", "Git"
   ]
  );

  canCard:Card = new Card(
    "CAN Library Restructuring",
    "assets/DirectCANSetup.jpg",
    `Our current car has several pieces of hardware that were not included on the previous car, including an extra motor, a charger, and new MPPTs, all of which required adding new messages to our CAN library. This brought the total to 20 messages the dashboard needed to read, but our microcontroller can only tranceive 15. To get around this, we rerouted the CAN, sending messages to other boards and merging them before sending them to the dashboard, which allowed us to have complete telemetry regarding every system on the car.`,
"",
"",
["C", "C language", "C code", "C coding langauge", "C programming language","Embedded systems", "Firmware", "Hardware",
  "Embedded software", "Embedded firmware", "DSP","CAN",
     "Digital Signal Processing", "UART", "Controller Area Network", "Drivers","GitHub", "Git"
 ]
  )

  serialCard:Card = new Card(
    "UART Drivers",
    "assets/SerialSetup.jpg",
    `Our UART drivers were originally set up to send and receive one character at a time. I rewrote the logic involving the tx and rx buffers, as well as the vector interrupts, to allows our boards to send and receive several characters at once while staying synchronized with each other. Doing so made debugging our code with the serial monitor much easier. We used this extensively while manufacturing our boards and during the race to debug unexpected issues.`,
"",
"",
["C", "C language", "C code", "C coding langauge", "C programming language","Embedded systems", "Firmware", "Hardware",
  "Embedded software", "Embedded firmware", "DSP",
     "Digital Signal Processing", "UART", "Controller Area Network", "Drivers","GitHub", "Git"
 ]
  )

  infotainmentCard:Card = new Card(
    "Infotainment",
    "assets/Infotainment.jpg",
    `I helped implement a few features for the frontend of our infotainment system, adding features for user interaction, fixing bugs that would cause the main program to crash, and allowing the system to save its state to allow users to save their preferences for the UI.`,
"",
"",
    ["Python", "User Interface", "UI", "PyQT","GitHub", "Git"]

  );

  initCard:Card = new Card(
    "Initialization",
    "assets/WordSearchDiagram1.png",
    `When initializing the puzzle, the flow follow these steps:
The user submits an input string representing a puzzle
Event listeners catch the input
They pass it to a factory function that creates a new instance of the Grid class using the parser
The Render Utility uses the Grid object's state to display the puzzle on the screen`,
"",
""
  );

  solvingCard:Card = new Card(
    "Solving",
    "assets/WordSearchDiagram2.png",
    `To solve/unsolve one step or solve the whole puzzle:
User sends the next, prev, or autofill signal
Event listeners catch those signals and pass it to the Grid instance
The Grid instance updates its state
The Render Utility uses this state to change what is displayed`,
"",
""
  );

  skillsCard:Card = new Card(
    "Skills/Frameworks Used",
    "assets/Display.png",
    `Test First Programming using Mocha unit test library
Grammars and Parsing with ParserLib library
Object-based approach with abstraction functions, representation invariants, and protection against representation exposure
Node
Factory design pattern`,
"",
""
  );

  featureCard:Card = new Card(
    "Image Feature Extraction",
    "assets/Paris.jpg",
    `Part of my role involved grouping the images into sensible categories. I did this by using InceptionV3 to extract the image features and group them using the k means algorithm. Once those splits were created, we worked to determine which features the algorithm had focused on when grouping the images together.`,
    "",
    ""
  );

  optimalCard:Card = new Card(
    "Optimal K Value",
    "assets/Paris.jpg",
    `Before running the feature extraction program, we needed to know the optimal number of groups. Using too few would result in overgeneralization, while too many would focus excessively on individual differences between the images. I ran k means using each k value from 3 to 15 and used Python's matplotlib library to graph how the variability within the groups decreased as the number of groups increased. Using the elbow method technique, I found the k value at which the decrease in variability started to taper off (10), and we moved forward with that as our optimal k value. `,
    "",
    ""
  );

  recognitionCard:Card = new Card(
    "Object Recognition",
    "assets/Paris.jpg",
    `Another part of our project was finding every type of object that was present in the images with which we were working. I did this by iterating over all our pictures, putting them through the Yolov5 algorithm, and adding them to certain directories ('traffic light', 'stop sign', 'car') based on what they had.`,
    "",
    ""
  );

  yoloCard:Card = new Card(
    "YoloV5 Tuning",
    "assets/Paris.jpg",
    `Finally, we wanted to fine tune the YoloV5 model to fit with the specific images in our project. To do this, I used Roboflow to hand-label pictures, split them into a training, validation, and testing group. With those groups and some fine tuning, I was able to bring the model's accuract to around 75% when run on our Paris directory, which was helpful for queries such as, 'I want to see pictures with cars'`,
    "",
    ""
  );

  eltPresentationCard:Card = new Card(
    "C-Suite Presentation",
    "assets/ELTPresentation.png",
    "At the end of the summer, I was one of four interns chosen to present our projects to the CEO, CFO, and Chief People Officer. This was an incredible opportunity to share my progress with eBay's Executive Leadership Team and contribute ideas for next year's internship program",
    "",
    ""
  )

  chatbotCard:Card = new Card(
    "AI Chatbot",
    "assets/ebaySign.jpg",
    "For my project, I leveraged Langchain and Python machine learning libraries to create a chatbot powered by large language models that automated a manual process done by the company's Monetization team, speeding up the process of responding to fee tickets by 30%. Skills and frameworks involved include Docker, RESTFul API calls, Prompt Engineering, UI Design, SQL, and GitHub",
    "",
    ""
  )

  pongCard:Card = new Card(
    "Digital Systems Laboratory - Video Pipeline",
    "assets/Pong.mp4",//should be a video
    `This lab had us build a video pipeline and finite state machine to implement pong on our FPGAs. This involved implementing:
    \tA video signal generator to send our horizontal/vertical coordinates/blanking periods
    \tThe TMDS algorithm used to minimize high-low logic transitions on our wires
    \tA differential balancing algorithm to balance the number of high-low signals being sent
    `,
    "",
"Fall 2024",
    [
      "SystemVerilog","FPGA","FSM", "Finite State Machine", "Video"
    ]
  );

  cameraCard:Card = new Card(
    "Digital Systems Laboratory - BROM Camera and Object Tracking",
    "assets/ObjectTracking.mp4",//should be a video
    `For this lab, we implemented:
    A pixel reconstructor, which took 8-bit data, sync, and valid signals from a camera to output 16-bit pixel values
    Palletizing to reduce the amount of space required to display an image on-screen
    Sprite sheets to transition between different images at the push of a button
    Subsampling to read camera data and 1X, 2X, and 4X scaling
    An image mask to capture color information
    Object tracking using a major-minor FSM divider to track the center of mass of certain objects
    `,
    "",
"Fall 2024",
    [
      "SystemVerilog","FPGA","FSM", "Finite State Machine", "Video",
      "Camera",
    ]
  );

  uartAudioCard:Card = new Card(
    "Digital Systems Laboratory - UART Audio",
    "assets/Grid.jpg",//should be a video
    `For this lab, we implemented a UART transmitter and receiver (implemented as Finite State Machine). We used these to upload sound recorded from a microphone to our computers, as well as downloading audio files from our computers to the memory of our FPGAs.

    `,
    "",
"Fall 2024",
    [
      "SystemVerilog","FPGA","FSM", "Finite State Machine", "UART",
      "Audio",
    ]
  );

  nasdaqCard:Card = new Card(
    "Nasdaq Software and AI Engineering Intern",
    "assets/NasdaqSkyline.jpg",
    `Worked with a partner to automate the year-end review process for Nasdaq employees using AWS Bedrock LLMs, Python, and external APIs, potentially saving the company $1,000,000 and 20,000 employee work hours per year in the future.`,
    "",
"January 2025 - February 2025",
    [
      "LLM","Python","AWS", "Bedrock", "API",
      "GitLab"
    ]
  );

  iotCard:Card = new Card(
    "Mobile and Sensor Computing - Aquatic Environment Monitoring",
    "assets/final_proj_diagram.drawio.png",
    `Worked with two partners to develop a low-power, modular, and scalable system for\
    monitoring the state of aquatic environments, including the temperature,\
    conductivity, and pressure, and wirelessly transmitting data to a central server\
    for interpolation, analysis, and plotting. `,
    "/iot",
    "Spring 2025",
    [
      "Embedded Systems", "C++"
    ]
  );
  // learn more
  // system description (same pic as cover probably)
  iotSystemCard:Card = new Card(
    "System Architecture",
    "assets/final_proj_diagram.drawio.png",
    `Our system had three components: the central processing station, server nodes, and\
    river nodes. River nodes collect sensor data about the water and wirelessly transmit them\
    to the server node. The server node aggregates this data and sends them to the central processing\
    station, which handles analysis, interpolation, and 3D graph generation.`,
    "",
    "",
    [

    ]
  );

  iotRiverNodeCard:Card = new Card(
    "River Nodes",
    "assets/riverNode.jpg",
    `River nodes consisted of an Arduino Nano, a UART-controlled ATGM336H GPS module, a DS18B20 temperature sensor,\
    a KEYESTUDIO TDS meter for measuring water quality, an I2C-controlled GY-MS5837-30BA pressure\
    sensor, and an NRF24L01+ RF module for wireless communication. To minimize power consumption, river\
    nodes were typically asleep, but periodically woke up to collect sensor data and transmit them to\
    the server node. This transmission could be done point-to-point or as part of a mesh network, which allowed us\
    to forward packets from one river node through another river node if it was out of range due to the\
    limitations of our RF modules.`,
    "",
    "",
    []
  );

  iotServerNodeCard:Card = new Card(
    "Server Node",
    "assets/serverNode.jpg",
    `The server node consisted of an Arduino Nano and the same NRF24L01+ RF module as the river nodes.\
    It listened to all the messages being sent by the river nodes and uploaded them to our central processing\
    station for analysis.`
  );

  iotCentralProcessingCard:Card = new Card(
    "Central Processing Station",
    "assets/combinedProcessing.png",
    `The central processing station read in packets of data from the server node. Each packet included\
    the river node ID, temperature, pressure, GPS coordinates, and TDS value. We then used these packets\
    to graph the temperature and TDS values over time and depth, which inferred using the pressure readings from the river nodes.\
    We used the GPS coordinates to display temperature and TDS values over a map of the body of water\
    we were monitoring.`
  );

  iotRangeTestingCard:Card = new Card(
    "Range vs Packet Success Rate Testing",
    "assets/combinedRangeTest.png",
    "The distance between the river nodes in the mesh networked involved an important\
    tradeoff: greater distance meant fewer nodes and lower cost, but also meant lower packet success rates and\
    more retransmissions, increasing latency and power consumption. To determine the optimal distance, we conducted\
    tests that involved placing a river node some fixed distance away from the server node, sending 30 packets, and\
    counting the number of packets that were acknowledged by the server node. We did this in 5 meter increments from\
    0 to 60 meters, and found that, beyond 40 meters, the RF modules were almost unusable, and that 30 meters allowed\
    the nodes to be relatively spread out without significant sacrifices in packet success rates."
  );

  iotPowerTestingCard:Card = new Card(
    "Power Consumption Test",
    "assets/combinedPowerTest.png", // Power supply + Kofi's asymptote graph
    "Using the datasheets for the Arduino Nano and all the modules in our system, we calculated\
    the total estimated power draw of our river nodes and confirmed our results by connecting\
    a river node to a power supply during normal operation. We found that we drew 10 mA on average,\
    which translated to 60 hours of battery life when using 4 AA batteries. We could increase the\
    battery life by adding solar panels to the nodes, using a larer battery pack, or using an MCU\
    that is specifically designed for sleep and wakeup operations."
  ); // was the 60 hours for after we started turning the sensors on and off
  // TX node
  // RX node
  // server
  // range testing
  // battery life testing (table setup + math)
  




  cards = [this.sevtCard, this.ebayCard, this.wordSearchCard, this.arcturusCard,
    this.osCard, this.procCard, this.ecCard, this.lispCard, this.asciiCard, this.snekCard,
    this.pgeCard, this.fulCard, this.holoCard, this.treeCard, this.bmsCard, this.cellCard,
    this.motorCard, this.canCard, this.serialCard, this.infotainmentCard, this.initCard,
    this.solvingCard, this.skillsCard, this.featureCard, this.optimalCard, this.recognitionCard,
    this.yoloCard, this.eltPresentationCard, this.chatbotCard, this.pongCard, this.cameraCard, this.uartAudioCard, 
    this.nasdaqCard, this.iotCard, this.iotSystemCard, this.iotRiverNodeCard, this.iotServerNodeCard,
    this.iotCentralProcessingCard, this.iotRangeTestingCard, this.iotPowerTestingCard
  ]
  getCards(titles:string[]):BehaviorSubject<Card[]>{
    let relevantCards:Card[] = []
    let numCards:number = this.cards.length;
    let counter:number = 0;
    // outer while loop is to make sure order is preserved
    // better ways to do this though
    while (counter < numCards){
        for(let card of this.cards){
          if (titles[counter]===card.title){
            relevantCards.push(card)
          }
        }
      counter++;
    }
    return new BehaviorSubject(relevantCards)
  } 

  searchCards(phrase:string):BehaviorSubject<Card[]>{
    let relevantCards:Card[] = []
    // let numCards:number = this.cards.length;
    // let counter:number = 0;
    // outer while loop is to make sure order is preserved
    // better ways to do this though
    // while (counter < numCards){
        for(let card of this.cards){
          if (card.text.toLowerCase().includes(phrase.toLowerCase())){
            relevantCards.push(card)
            continue;
          }
          for (let tag of card.tags){
            if (tag.toLowerCase().includes(phrase) || phrase.toLowerCase().includes(tag)){
              relevantCards.push(card)
              continue;
            }
          }
        }
      // counter++;
    // }
    return new BehaviorSubject(relevantCards)

  }


  constructor() { }

  // setMessage(message:string){
  //   this.message.next(message)
  // }

  

}
