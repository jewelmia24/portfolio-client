import nextJs from '../../../public/assests/skills-icon/next-js-seeklogo.svg'
import reactJs from '../../../public/assests/skills-icon/react-seeklogo.svg'
import typeScript from '../../../public/assests/skills-icon/typescript-seeklogo.svg'
import javaScript from '../../../public/assests/skills-icon/javascript-js-seeklogo.svg'
import redux from '../../../public/assests/skills-icon/redux-seeklogo.svg'
import tailwind from '../../../public/assests/skills-icon/tailwind-css-seeklogo.svg'
import materialUI from '../../../public/assests/skills-icon/material-ui-seeklogo.svg'
import antDesign from '../../../public/assests/skills-icon/ant-design-seeklogo.svg'
import shadCn from '../../../public/assests/skills-icon/shadcnui.svg'
import nodeJs from '../../../public/assests/skills-icon/node-js-seeklogo.svg'
import expressJs from '../../../public/assests/skills-icon/express.png'
import mongoDb from '../../../public/assests/skills-icon/mongodb-icon-seeklogo.svg'
import mongoose from '../../../public/assests/skills-icon/mongoose-seeklogo.png'
import firebase from '../../../public/assests/skills-icon/firebase-seeklogo.svg'
import jwt from '../../../public/assests/skills-icon/jwt-seeklogo.svg'
import git from '../../../public/assests/skills-icon/git-seeklogo.svg'
import gitHub from '../../../public/assests/skills-icon/github-seeklogo.svg'
import netlify from '../../../public/assests/skills-icon/netlify-seeklogo.svg'
import vercel from '../../../public/assests/skills-icon/vercel.svg'
import vsCode from '../../../public/assests/skills-icon/visual-studio-code-seeklogo.svg'
import postman from '../../../public/assests/skills-icon/postman-seeklogo.svg'
import figma from '../../../public/assests/skills-icon/figma-seeklogo.svg'

import type { StaticImageData } from 'next/image';

export type TSkill = {
  name: string;
  image: StaticImageData;
};

export type TSkills= {
  title: string;
  skills: TSkill[];
};



export const skills:TSkills[] = [
    {
      title: "Frontend",
      skills: [
        {
          name: "Next Js",
          image: nextJs,
        },
        {
          name: "React Js",
          image:reactJs,
        },

        {
          name: "Typescript",
          image:typeScript,
        },
        {
          name: "JavaScript",
          image:javaScript
        },
        {
          name: "Redux-Toolkit",
          image: redux,
        },
        {
          name: "Tailwind",
          image:tailwind
        },

        {
          name: "Material UI",
          image:materialUI
        },
        {
          name: 'Ant Design',
          image:antDesign
        },
        {
          name: "Shadcn",
          image:shadCn
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Typescript",
          image:typeScript
        },
        {
          name: "Node Js",
          image: nodeJs
        },
        {
          name: "Express Js",
          image:expressJs
        },

        {
          name: "MongoDB",
          image:mongoDb
        },
        {
          name: "Mongoose",
          image:mongoose
        },
        {
          name: "Firebase",
          image: firebase
        },
        {
          name: "Jwt",
          image: jwt
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:git
        },
        {
          name: "GitHub",
          image:gitHub
        },

        {
          name: "Netlify",
          image: netlify
            
        },
        {
          name: "Vercel",
          image:vercel
        },
        {
          name: "VS Code",
          image:vsCode
        },
        {
          name: "Postman",
          image:postman
        },

        {
          name: "Figma",
          image: figma
        },
      ],
    },
  ];