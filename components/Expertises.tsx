
import { TbBrandCss3, TbBrandDjango, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs, TbBrandNodejs, TbBrandPython, TbBrandReact, TbBrandReactNative, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";


export default function Expertises() {
  return (
    <div id="expertises" className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:text-left gap-4">
        <div className="">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Expertises
          </h2>
          <p>Here are some of the skills I possess.</p>
        </div>

        <div className="container">
          <div className="box">
            <span className="title">Next.JS</span>
            <div>
              <strong>WEB FULLSTACK</strong>
              {/* <p>Site Web / Web App / SaaS</p> */}
              <span>Basé sur React.JS</span>
              <TbBrandNextjs size={70} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">React.JS</span>
            <div>
              <strong>WEB FRONTEND</strong>
              <span>Basé sur JavaScript / TypScript</span>
              <TbBrandReact size={70} />

            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title small-title">JavaScript TypeScript</span>
            <div>
              <strong></strong>
              <span>Langage de programmation</span>
              <div className="flex">

              <TbBrandJavascript size={70} />
              <TbBrandTypescript size={70} />
              </div>

            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">Python</span>
            <div>
              <strong>JOE WATSON SBF</strong>
              <span>Langage de programmation</span>
              <TbBrandPython size={70} />

            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">HTML/ CSS</span>
            <div>
              <strong>WEB FRONTEND</strong>
              <span>Balisage & Style</span>
              <div className="flex">
              <TbBrandHtml5 size={70} />
              <TbBrandCss3 size={70} />
              </div>

            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">Tailwind</span>
            <div>
              <strong>STYLE</strong>
              <span>VALID</span>
              <TbBrandTailwind size={70} />

            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">Node.JS</span>
            <div>
              <strong>WEB BACKEND</strong>
              <span>VALID</span>
              <TbBrandNodejs size={70} />

            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">Django</span>
            <div>
              <strong>WEB BACKEND</strong>
              <span>VALID</span>
              <TbBrandDjango size={70} />

            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">Ract Native</span>
            <div>
              <strong>xxx</strong>
              <span>MOBILE IOS / ANDROID</span>
              <TbBrandReactNative size={70} />

            </div>
          </div>
        </div>
        
      </div>
  )
}
