// ---------- Navbar titles
const enNavbarData = {
  title: " Dongyang Li ",
  Home: "Home",
  publications: "Publications",
  Research: "Research",
  Jobs: "Jobs",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: " Dongyang Li ",
  jobTitle: " Lecturer ",
  home_title: "About me",
  home_content: `
  <div>
    <p> I'm a lecturer at Faculty of Artificial Intelligence, Shanghai University of Electric Power. I have obtained my Ph.D degree from East China Normal University (ECNU), supervised by Prof. Xiaofeng He. 
    I did my master at school of computer science, Chang'an University, advised by Prof. Shaoyang Zhang.
    Currently, my research interests are large language models (Text-Modal & Multi-Modal) and multi-agent system. 
    I have published papers in top-tier international conferences and journals, such as ACL, AAAI, EMNLP, COLING, KBS, ECAI, etc.
    </p>
    <h2 class='title'> Research Interests </h2>
    <p><strong>Looking for master’s students to work on large language models, multi-agent system! </strong> </p>
    <ul>
      <li> Large Language Models (Text-Modal & Multi-Modal)</li>
      <li> Multi-Agent System </li>
      <li> Knowledge-Enhanced Language Models </li>
    </ul>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Conference & Journal Papers",
  type_one_items: [
     {
      title: `On the Role of Long-tail Knowledge in Retrieval Augmented Large Language Models`,
      abstract: `<strong>Dongyang Li</strong>, Junbing Yan, Taolin Zhang, Chengyu Wang, Xiaofeng He, Longtao Huang, Hui Xue, Jun Huang`,
      link: "https://aclanthology.org/2024.acl-short.12/",
      writers: ["<strong>[ACL 2024, CCF-A]</strong>",],
    },
    {
      title: `HiCLRE: A Hierarchical Contrastive Learning Framework for Distantly Supervised Relation Extraction`,
      abstract: `<strong>Dongyang Li</strong>, Taolin Zhang, Nan Hu, Chengyu Wang, Xiaofeng He`,
      link: "https://aclanthology.org/2022.findings-acl.202/",
      writers: ["<strong>[ACL 2022, CCF-A]</strong>",],
    },
    {
      title: `Mnemosyne: Accelerating Multi-Hop Question Answering via Cache Hit Order Fitting`,
      abstract: `Haizhou Du, Jiujiu Li, <strong>Dongyang Li<sup>✉</sup><strong>, Luobin Huang, Lisheng Wang`,
      link: "https://aclanthology.org/2022.findings-acl.202/",
      writers: ["<strong>AAAI 2026 (CCF-A)</strong>",],
    },
  ],
 
  type_two_title: `Research Projects`,
  type_two_items: [
    {
      title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
      date: "1996",
      writers: [],
    },
    {
      title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
      date: "1996",
      writers: ["Claudio Cioffi-Revilla", "masoud Claudio "],
    },
  ],

  // type_three_title: "Book Chapters",
  // type_three_items: [
  //   {
  //     title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [],
  //   },
  //   {
  //     title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
  //     abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
  //     date: "1996",
  //     link: "http://link.com",
  //     github: "http://github.com",
  //     writers: ["Claudio Cioffi-Revilla"],
  //   },
  // ],

  // type_four_title: "",
  // type_four_items: [
  //   {
  //     title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [],
  //   },
  //   {
  //     title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
  //     abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
  //     date: "1996",
  //     link: "http://link.com",
  //     github: "http://github.com",
  //     writers: ["Claudio Cioffi-Revilla"],
  //   },
  // ],
};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p> My research goal is to combine the three major sub-fields of the Computational Social Science, including Social Media Data Analysis, Network Analysis, and Agent-based Modeling, to study various social science problems. Below you can find a summary of my past and current projects.</p>
        <br />
        <h4 style="font-size: 1.1rem "> Identifying and Characterizing US Domestic Ideological Extremists </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
        <img src='../files/images/research.png' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat <br /> imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet <br /> lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
    </div>
  `,
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Jobs",
  items: [
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "20 April 2022",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2", "achievement 3"],
    },
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2"],
    },
  ],
};
