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
    <p> I'm a lecturer at Faculty of Artificial Intelligence, Shanghai University of Electric Power. I have obtained my Ph.D degree from East China Normal University (ECNU), supervised by 
    <a href="https://faculty.ecnu.edu.cn/_s16/hxf/main.psp" target="_blank" class="link" style="color: inherit; text-decoration: underline;">Prof. Xiaofeng He</a>. 
    I did my master at school of computer science, Chang'an University, advised by <a href="https://js.chd.edu.cn/xxgcxy/zsy100/list.htm" target="_blank" class="link" style="color: inherit; text-decoration: underline;" >Prof. Shaoyang Zhang</a>.
    Currently, my research interests are large language models (Text-Modal & Multi-Modal) and multi-agent system. 
    I have published 30 papers in top-tier international conferences and journals, such as ACL, AAAI, EMNLP, COLING, ICRA, KBS, ECAI, etc. 
    </p>
    <h2 class='title'> Research Interests </h2>
    <p><strong><span style="color: rgb(178,102,165);">Looking for master’s students to work on large language models, multi-agent system! </span></strong> </p>
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
      download: "https://aclanthology.org/2024.acl-short.12/",
      writers: ["<strong>[ACL 2024, CCF-A]   </strong>",],
    },
    {
      title: `HiCLRE: A Hierarchical Contrastive Learning Framework for Distantly Supervised Relation Extraction`,
      abstract: `<strong>Dongyang Li</strong>, Taolin Zhang, Nan Hu, Chengyu Wang, Xiaofeng He`,
      download: "https://aclanthology.org/2022.findings-acl.202/",
      writers: ["<strong>[ACL 2022, CCF-A]   </strong>",],
    },
    {
      title: `DCTR: Dual-Constraint Subgraph Optimization for Knowledge Graph-based Retrieval-Augmented Generation`,
      abstract: `Yukun Cao, Zirui Xu, <strong>Dongyang Li<sup>✉</sup> </strong>, Zhihao Guo, Luobin Huang, Lisheng Wang`,
      download: "https://ojs.aaai.org/index.php/AAAI/article/view/40265",
      writers: ["<strong>[AAAI 2026, CCF-A]   </strong>",],
    },
    {
      title: `Mnemosyne: Accelerating Multi-Hop Question Answering via Cache Hit Order Fitting`,
      abstract: `Haizhou Du, Jiujiu Li, <strong>Dongyang Li<sup>✉</sup></strong>, Luobin Huang, Lisheng Wang`,
      download: "https://ojs.aaai.org/index.php/AAAI/article/view/40310",
      writers: ["<strong>[AAAI 2026, CCF-A]   </strong>",],
    },
    {
      title: `KEHRL: Learning Knowledge-Enhanced Language Representations with Hierarchical Reinforcement Learning`,
      abstract: `<strong>Dongyang Li</strong>, Taolin Zhang, Longtao Huang, Chengyu Wang, Xiaofeng He, Hui Xue`,
      download: "https://aclanthology.org/2024.lrec-main.847/",
      writers: ["<strong>[COLING 2024, CCF-B]</strong>",],
    },
    {
      title: `UniPSDA: Unsupervised Pseudo Semantic Data Augmentation for Zero-Shot Cross-Lingual Natural Language Understanding`,
      abstract: `<strong>Dongyang Li</strong>, Taolin Zhang, Jiali Deng, Longtao Huang, Chengyu Wang, Xiaofeng He, Hui Xue`,
      download: "https://aclanthology.org/2024.lrec-main.1482/",
      writers: ["<strong>[COLING 2024, CCF-B]</strong>",],
    },
    {
      title: `MCFC: A Momentum-Driven Clicked Feature Compressed Pre-trained Language Model for Information Retrieval`,
      abstract: `<strong>Dongyang Li</strong>, Ruixue Ding, Pengjun Xie, Xiaofeng He`,
      download: "https://link.springer.com/chapter/10.1007/978-981-97-9431-7_6",
      writers: ["<strong>[NLPCC 2024, CCF-C]</strong>",],
    },
    {
      title: `GeoGLUE: A Chinese GeoGraphic Language Understanding Evaluation Benchmark`,
      abstract: `<strong>Dongyang Li</strong>, Ruixue Ding, Qiang Zhang, Zheng Li, Boli Chen, Pengjun Xie, Yao Xu, Xin Li, Ning Guo, Fei Huang, Xiaofeng He`,
      download: "https://arxiv.org/abs/2305.06545",
      writers: ["<strong>[ADMA 2024, CCF-C]</strong>",],
    },
    {
      title: `DAFNet: Dynamic Auxiliary Fusion for Sequential Model Editing in Large Language Models`,
      abstract: `Taolin Zhang, Qizhou Chen, <strong>Dongyang Li (Co-first author)</strong>, Chengyu Wang, Xiaofeng He, Longtao Huang, Hui Xue, Jun Huang`,
      download: "https://aclanthology.org/2024.findings-acl.92/",
      writers: ["<strong>[ACL 2024, CCF-A]</strong>",],
    },
    {
      title: `R4: Reinforced Retriever-Reorder-Responder for Retrieval-Augmented Large Language Models`,
      abstract: `Taolin Zhang, <strong>Dongyang Li (Co-first author)</strong>, Qizhou Chen, Chengyu Wang, Longtao Huang, Hui Xue, Xiaofeng He, Jun Huang`,
      download: "https://arxiv.org/abs/2405.02659",
      writers: ["<strong>[ECAI 2024, CCF-B]</strong>",],
    },
    {
      title: `LH-DETR: A Lightweight Hybrid Architecture for End-to-End Object Detection in UAV Images`,
      abstract: `Feifei Xu, Lupeng Sun, <strong>Dongyang Li<sup>✉</sup></strong>, Guoxiang Wu, Chenchuan Lv`,
      download: "https://scholar.google.com/citations?user=YKgKz5gAAAAJ&hl=zh-CN",
      writers: ["<strong>[ICRA 2026, CCF-B]</strong>",],
    },
    {
      title: `A Unified Object-Centric Spatio-Temporal Graph Reasoning Framework for Audio-Visual Question Answering`,
      abstract: `Feifei Xu, Wenjing Zhu, <strong>Dongyang Li<sup>✉</sup></strong>, Puzhe Li, Luobin Huang, Yu Xie, Zirui Xu`,
      download: "https://scholar.google.com/citations?user=YKgKz5gAAAAJ&hl=zh-CN",
      writers: ["<strong>[ICMR 2026, CCF-B]</strong>",],
    },
    {
      title: `From Confrontion to Balance: A Kronecker-Constrained Spectral Entropy Joint Optimization Framework for Multimodal Sentiment Analysis`,
      abstract: `Feifei Xu, Puzhe Li, <strong>Dongyang Li<sup>✉</sup></strong>, Bo Li, Luobin Huang, Wenjing Zhu, Zirui Xu, Yu Xie`,
      download: "https://scholar.google.com/citations?user=YKgKz5gAAAAJ&hl=zh-CN",
      writers: ["<strong>[ICMR 2026, CCF-B]</strong>",],
    },
     {
      title: `Text-Driven Hybrid Curriculum Learning for Multimodal Sentiment Analysis`,
      abstract: `Feifei Xu, Puzhe Li, <strong>Dongyang Li<sup>✉</sup></strong>, Luobin Huang, and Wenjing Zhu`,
      download: "https://scholar.google.com/citations?user=YKgKz5gAAAAJ&hl=zh-CN",
      writers: ["<strong>[MMM 2026, CCF-C]</strong>",],
    },
     {
      title: `Question-Aware Spatial-Temporal Reasoning in Patch for Audio-Visual Question Answering`,
      abstract: `Feifei Xu, Wenjing Zhu, <strong>Dongyang Li<sup>✉</sup></strong>, and Puzhe Li`,
      download: "https://scholar.google.com/citations?user=YKgKz5gAAAAJ&hl=zh-CN",
      writers: ["<strong>[MMM 2026, CCF-C]</strong>",],
    },
    {
      title: `LME-DETR: Lightweight and Multi-Scale Feature-Enhanced End-to-End Object Detection for Aerial Images`,
      abstract: `Feifei Xu, Yu Xie, <strong>Dongyang Li<sup>✉</sup></strong>, luobin Huang, Zhihao Guo`,
      download: "https://scholar.google.com/citations?user=YKgKz5gAAAAJ&hl=zh-CN",
      writers: ["<strong>[CVM 2026, CCF-C]</strong>",],
    },
    {
      title: `Periodicity Variations Modelling Based on 2D Multi‐Scale Patch for Multivariate Time Series Forecasting Using Improved MLP and Depthwise Separable Convolution`,
      abstract: `Yachuan Wang, Mi Wen, <strong>Dongyang Li<sup>✉</sup></strong>, Jigang Wang`,
      download: "https://www.semanticscholar.org/paper/Periodicity-Variations-Modelling-Based-on-2D-Patch-Wang-Wen/7b67b19a0219f70f8b0cf22540506a64e23be196",
      writers: ["<strong>[Expert Systems 2026, SCI Q4 Journal]</strong>",],
    },
    {
      title: `CUOM: A Causal Unbiased Optimization Method for Federated Domain`,
      abstract: `Mi Wen, Kang Han, <strong>Dongyang Li</strong>, QiYe Cai, HaiLun Shen`,
      download: "https://scholar.google.com/citations?user=YKgKz5gAAAAJ&hl=zh-CN",
      writers: ["<strong>[KBS, SCI Q1 Journal]</strong>",],
    },
    {
      title: `DSVM-UNet : Enhancing VM-UNet with Dual Self-distillation for Medical Image Segmentation`,
      abstract: `Renrong Shao, <strong>Dongyang Li</strong>, Dong Xia, Lin Shao, Jiangdong Lu, Fen Zheng, Lulu Zhang`,
      download: "https://scholar.google.com/citations?user=YKgKz5gAAAAJ&hl=zh-CN",
      writers: ["<strong>[ICASSP 2026, CCF-B]</strong>",],
    },
    {
      title: `Taming the Long Tail in Federated Learning: A Unified Global and Personalized Model Framework`,
      abstract: `Pengsong Zhang, Mi Wen, Zhou Zhu, <strong>Dongyang Li</strong>`,
      download: "https://scholar.google.com/citations?user=YKgKz5gAAAAJ&hl=zh-CN",
      writers: ["<strong>[Information Sciences, SCI Q1 Journal]</strong>",],
    },
    {
      title: `AMATA: Adaptive Multi-Agent Trajectory Alignment for Knowledge-Intensive Question Answering`,
      abstract: `Taolin Zhang, <strong>Dongyang Li</strong>, Chen Chen, Qizhou Chen, Jiuheng Wan, Xiaofeng He, Chengyu Wang, Richang Hong`,
      download: "https://scholar.google.com/citations?user=YKgKz5gAAAAJ&hl=zh-CN",
      writers: ["<strong>[ACL 2026, CCF-A]</strong>",],
    },
    {
      title: `BELLE: A Bi-Level Multi-Agent Reasoning Framework for Multi-Hop Question Answering`,
      abstract: `Taolin Zhang, <strong>Dongyang Li</strong>, Qizhou Chen, Chengyu Wang, Xiaofeng He`,
      download: "https://aclanthology.org/2025.acl-long.211/",
      writers: ["<strong>[ACL 2025, CCF-A]</strong>",],
    },
    {
      title: `PE: A Poincare Explanation Method for Fast Text Hierarchy Generation`,
      abstract: `Qian Chen, <strong>Dongyang Li</strong>, Xiaofeng He, Hongzhao Li, Hongyu Yi`,
      download: "https://aclanthology.org/2024.findings-emnlp.462/",
      writers: ["<strong>[EMNLP 2024, CCF-B]</strong>",],
    },
    {
      title: `SE-Prompt: Exploring Semantic Enhancement with Prompt Tuning for Relation Extraction`,
      abstract: `Cai Wang, <strong>Dongyang Li</strong>, Xiaofeng He`,
      download: "https://dl.acm.org/doi/10.1007/978-3-031-46674-8_8",
      writers: ["<strong>[ACL 2025, CCF-A]</strong>",],
    },
    {
      title: `OnMKD: An Online Mutual Knowledge Distillation Framework for Passage Retrieval`,
      abstract: `Jiali Deng, <strong>Dongyang Li</strong>, Taolin Zhang, Xiaofeng He`,
      download: "https://dl.acm.org/doi/10.1007/978-3-031-44696-2_56",
      writers: ["<strong>[NLPCC 2023, CCF-C]</strong>",],
    },
    {
      title: `QueueEDIT: Structural Self-Correction for Sequential Model Editing in LLMs`,
      abstract: `Taolin Zhang, Haidong Kang, <strong>Dongyang Li</strong>, Qizhou Chen, Xiaofeng He, Chengyu Wang, Richang Hong`,
      download: "https://scholar.google.com/citations?user=YKgKz5gAAAAJ&hl=zh-CN",
      writers: ["<strong>[ACL 2026, CCF-A]</strong>",],
    },
    {
      title: `CIDR: A Cooperative Integrated Dynamic Refining Method for Minimal Feature Removal Problem`,
      abstract: `Qian Chen, Taolin Zhang, <strong>Dongyang Li</strong>, Xiaofeng He`,
      download: "https://arxiv.org/abs/2312.08157",
      writers: ["<strong>[AAAI 2024, CCF-A]</strong>",],
    },
    {
      title: `Knowledge-Enhanced Prototypical Network with Structural Semantics for Few-Shot Relation Classification`,
      abstract: `Yanhu Li, Taolin Zhang, <strong>Dongyang Li</strong>, Xiaofeng He`,
      download: "https://link.springer.com/chapter/10.1007/978-3-031-33380-4_11",
      writers: ["<strong>[PAKDD 2023, CCF-C]</strong>",],
    },
    {
      title: `Lifelong Knowledge Editing for LLMs with Retrieval-Augmented Continuous Prompt Learning`,
      abstract: `Qizhou Chen, Taolin Zhang, Xiaofeng He, <strong>Dongyang Li</strong>, Chengyu Wang, Longtao Huang, Hui Xue`,
      download: "https://aclanthology.org/2024.emnlp-main.751/",
      writers: ["<strong>[EMNLP 2024, CCF-B]</strong>",],
    },
    
  ],
 
  type_two_title: `<strong style="text-decoration: underline;">Looking for master’s students to work on large language models, multi-agent system! </strong>`,
  // type_two_title: `Research Projects`,
  // type_two_items: [
  //   {
  //     title: `The Innovation Special Fund Project in Shanghai University of Electric Power (No. X202511010).`,
  //     abstract: "Dongyang Li  2025-2027",
  //   },
  //   {
  //     title: `The Commercial Research Project “Large Language Model–Based Intelligent Operation and Maintenance Knowledge Platform for Power Grid Equipment“ (No. H2025-220).`,
  //     abstract: "Dongyang Li 2025-2026",
  //   },
  // ],

  // type_three_title: "<strong style="text-decoration: underline;">Looking for master’s students to work on large language models, multi-agent system! </strong>",
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
