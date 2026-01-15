// ---------- Navbar titles
const enNavbarData = {
  title: " Dongyang Li ",
  Home: "Home",
  publications: "publications",
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
    Currently, my research interests are large language models, multi-modal large language models and multi-agent system. 
    I have published 20+ papers in top-tier international conferences and journals, such as ACL, AAAI, EMNLP, COLING, KBS, ECAI, etc.
    </p>
    <h2 class='title'> Research Interests </h2>
    <p>Looking for master’s students to work on large language models, multi-agent system!  </p>
    <ul>
      <li> Large Language Models (Text-modal & Multi-modal)</li>
      <li> Multi-agent System </li>
      <li> Knowledge-Enhanced Language Models </li>
    </ul>
    <h2 class='title'> Publications </h2>
    <ul>
      <li> <strong>On the Role of Long-tail Knowledge in Retrieval Augmented Large Language Models</strong>
      <p><strong>Dongyang Li</strong>, Junbing Yan, Taolin Zhang, Chengyu Wang, Xiaofeng He, Longtao Huang, Hui Xue, Jun Huang</p>
      <p> <strong>ACL 2024 (CCF-A)</strong> </p>
      </li>
      <li> <strong>HiCLRE: A Hierarchical Contrastive Learning Framework for Distantly Supervised Relation Extraction</strong>
      <p><strong>Dongyang Li</strong>, Taolin Zhang, Nan Hu, Chengyu Wang, Xiaofeng He</p>
      <p> <strong>ACL 2022 (CCF-A)</strong> </p>
      </li>
      <li> <strong>Mnemosyne: Accelerating Multi-Hop Question Answering via Cache Hit Order Fitting</strong>
      <p>Haizhou Du, Jiujiu Li, <strong>Dongyang Li<sup>✉</sup><strong>, Luobin Huang, Lisheng Wang </p>
      <p> <strong>AAAI 2026 (CCF-A)</strong> </p>
      </li>
      </li>
      <li> <strong>DCTR: Dual-Constraint Subgraph Optimization for Knowledge Graph-based Retrieval-Augmented Generation</strong>
      <p>Yukun Cao, Zirui Xu, <strong>Dongyang Li<sup>✉</sup><strong>, Zhihao Guo, Luobin Huang, Lisheng Wang</p>
      <p> <strong>AAAI 2026 (CCF-A)</strong> </p>
      </li>
      </li>
      <li> <strong>KEHRL: Learning Knowledge-Enhanced Language Representations with Hierarchical Reinforcement Learning</strong>
      <p><strong>Dongyang Li</strong>, Taolin Zhang, Longtao Huang, Chengyu Wang, Xiaofeng He, Hui Xue </p>
      <p> <strong>COLING 2024 (CCF-B)</strong> </p>
      </li>
      </li>
      <li> <strong>UniPSDA: Unsupervised Pseudo Semantic Data Augmentation for Zero-Shot Cross-Lingual Natural Language Understanding</strong>
      <p><strong>Dongyang Li</strong>, Taolin Zhang, Jiali Deng, Longtao Huang, Chengyu Wang, Xiaofeng He, Hui Xue</p>
      <p> <strong>COLING 2024 (CCF-B)</strong> </p>
      </li>
      <li> <strong>MCFC: A Momentum-Driven Clicked Feature Compressed Pre-trained Language Model for Information Retrieval</strong>
      <p><strong>Dongyang Li</strong>, Ruixue Ding, Pengjun Xie, Xiaofeng He</p>
      <p> <strong>NLPCC 2024 (CCF-C)</strong> </p>
      </li>
      <li> <strong>GeoGLUE: A Chinese GeoGraphic Language Understanding Evaluation Benchmark</strong>
      <p><strong>Dongyang Li</strong>, Ruixue Ding, Qiang Zhang, Zheng Li, Boli Chen, Pengjun Xie, Yao Xu, Xin Li, Ning Guo, Fei Huang, Xiaofeng He</p>
      <p> <strong>ADMA 2024 (CCF-C)</strong> </p>
      </li>
      <li> <strong>DAFNet: Dynamic Auxiliary Fusion for Sequential Model Editing in Large Language Models</strong>
      <p>Taolin Zhang, Qizhou Chen, <strong>Dongyang Li (Co-first author)</strong>, Chengyu Wang, Xiaofeng He, Longtao Huang, Hui Xue, Jun Huang</p>
      <p> <strong>ACL 2024 (CCF-A)</strong> </p>
      </li>
      <li> <strong>R4: Reinforced Retriever-Reorder-Responder for   Retrieval-Augmented Large Language Models</strong>
      <p>Taolin Zhang, <strong>Dongyang Li (Co-first author)</strong>, Qizhou Chen, Chengyu Wang, Longtao Huang, Hui Xue, Xiaofeng He, Jun Huang</p>
      <p> <strong>ECAI 2024 (CCF-B)</strong> </p>
      </li>
      <li> <strong>Text-Driven Hybrid Curriculum Learning for Multimodal Sentiment Analysis</strong>
      <p>Feifei Xu, Puzhe Li, <strong>Dongyang Li<sup>✉</sup><strong>, Luobin Huang, and Wenjing Zhu</p>
      <p> <strong>MMM 2026 (CCF-C)</strong> </p>
      </li>
      <li> <strong>Question-Aware Spatial-Temporal Reasoning in Patch for Audio-Visual Question Answering</strong>
      <p>Feifei Xu, Wenjing Zhu, <strong>Dongyang Li<sup>✉</sup><strong>, and Puzhe Li</p>
      <p> <strong>MMM 2026 (CCF-C)</strong> </p>
      </li>
      <li> <strong>LME-DETR: Lightweight and Multi-Scale Feature-Enhanced End-to-End Object Detection for Aerial Images</strong>
      <p>Feifei Xu, Yu Xie, <strong>Dongyang Li<sup>✉</sup><strong>, luobin Huang, Zhihao Guo</p>
      <p> <strong>MMM 2026</strong> </p>
      </li>
      <li> <strong>CUOM: A Causal Unbiased Optimization Method for Federated Domain</strong>
      <p>Mi Wen, Kang Han, <strong>Dongyang Li</strong>, QiYe Cai, HaiLun Shen</p>
      <p> <strong>KBS (SCI Q1 journal)</strong> </p>
      </li>
      <li> <strong>Taming the Long Tail in Federated Learning: A Unified Global and Personalized Model Framework</strong>
      <p>Pengsong Zhang, Mi Wen, Zhou Zhu, <strong>Dongyang Li</strong></p>
      <p> <strong>Information Sciences (SCI Q2 journal)</strong> </p>
      </li>
      </li>
      <li> <strong>BELLE: A Bi-Level Multi-Agent Reasoning Framework for Multi-Hop Question Answering</strong>
      <p>Taolin Zhang, <strong>Dongyang Li</strong>, Qizhou Chen, Chengyu Wang, Xiaofeng He</p>
      <p> <strong>ACL 2025 (CCF-A)</strong> </p>
      </li>
      </li>
      <li> <strong>PE: A Poincare Explanation Method for Fast Text Hierarchy Generation</strong>
      <p>Qian Chen, <strong>Dongyang Li</strong>, Xiaofeng He, Hongzhao Li, Hongyu Yi</p>
      <p> <strong>EMNLP 2024 (CCF-B)</strong> </p>
      </li>
      </li>
      <li> <strong>SE-Prompt: Exploring Semantic Enhancement with Prompt Tuning for Relation Extraction</strong>
      <p>Cai Wang, <strong>Dongyang Li</strong>, Xiaofeng He</p>
      <p> <strong>ADMA 2023 (CCF-C)</strong> </p>
      </li>
      </li>
      <li> <strong>OnMKD: An Online Mutual Knowledge Distillation Framework for Passage Retrieval</strong>
      <p>Jiali Deng, <strong>Dongyang Li</strong>, Taolin Zhang, Xiaofeng He</p>
      <p> <strong>NLPCC 2023 (CCF-C)</strong> </p>
      </li>
      </li>
      <li> <strong>CIDR: A Cooperative Integrated Dynamic Refining Method for Minimal Feature Removal Problem</strong>
      <p>Qian Chen, Taolin Zhang, <strong>Dongyang Li</strong>, Xiaofeng He</p>
      <p> <strong>AAAI 2024 (CCF-A)</strong> </p>
      </li>
      </li>
      <li> <strong>Knowledge-Enhanced Prototypical Network with Structural Semantics for Few-Shot Relation Classification</strong>
      <p>Yanhu Li, Taolin Zhang, <strong>Dongyang Li</strong>, Xiaofeng He</p>
      <p> <strong>PAKDD 2023 (CCF-C)</strong> </p>
      </li>
      </li>
      <li> <strong>Lifelong Knowledge Editing for LLMs with Retrieval-Augmented Continuous Prompt Learning</strong>
      <p>Qizhou Chen, Taolin Zhang, Xiaofeng He, <strong>Dongyang Li</strong>, Chengyu Wang, Longtao Huang, Hui Xue</p>
      <p> <strong>EMNLP 2024 (CCF-B)</strong> </p>
      </li>
      
    </ul>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Journal Papers",

  type_one_items: [
    {
      title: `Dancing to the beat of climate change: Studying visual frames on TikTok through the left-right divide among U.S. politicians (with ).`,
      abstract: `Politicians across the political spectrum have taken to TikTok in an attempt to reach young voters by producing original videos. This novel trend has turned TikTok into the new polarizing ring in the political communication battle, deepening the partisan breach around issues such as climate change. However`,
      date: "",
      link: "http://link.com",
      github: "",
      download: "",
      writers: ["Claudio Cioffi-Revilla", "masoud Claudio "],
    },
    {
      title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `Politicians across the political spectrum have taken to TikTok in an attempt to reach young voters by producing original videos. This novel trend has turned TikTok into the new polarizing ring in the political communication battle, deepening the partisan breach around issues such as climate change. However`,
      date: "1996",
      link: "",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla", ""],
    },
  ],

  type_two_title: "Under Review",
  type_two_items: [
    {
      title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
      abstract: ``,
      date: "1996",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla", "masoud Claudio "],
    },
  ],

  type_three_title: "Book Chapters",
  type_three_items: [
    {
      title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla"],
    },
  ],

  type_four_title: "",
  type_four_items: [
    {
      title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla"],
    },
  ],
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
