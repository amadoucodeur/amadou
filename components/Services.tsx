
import { TbBrandFirebase, TbBrandGit, TbBrandGithub, TbBrandSupabase, TbBrandVercel } from "react-icons/tb";



export default function Services() {
  return (
    <div id="services" className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:text-left gap-4">
        <div className="">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Services
          </h2>
          <p>Here are some of the skills I possess.</p>
        </div>

        <div className="container containerBlue">
          <div className="box">
            <span className="title">Vercel</span>
            <div>
              <strong>WEB FULLSTACK</strong>
              {/* <p>Site Web / Web App / SaaS</p> */}
              <span>Basé sur React.JS</span>
              <TbBrandVercel size={70} />
            </div>
          </div>
        </div>
        <div className="container containerBlue">
          <div className="box">
            <span className="title">Supabase</span>
            <div>
              <strong>WEB FULLSTACK</strong>
              {/* <p>Site Web / Web App / SaaS</p> */}
              <span>Basé sur React.JS</span>
              <TbBrandSupabase size={70} />
            </div>
          </div>
        </div>
        <div className="container containerBlue">
          <div className="box">
            <span className="title">Firebase</span>
            <div>
              <strong>WEB FULLSTACK</strong>
              {/* <p>Site Web / Web App / SaaS</p> */}
              <span>Basé sur React.JS</span>
              <TbBrandFirebase size={70} />
            </div>
          </div>
        </div>
        <div className="container containerBlue">
          <div className="box">
            <span className="title">Git/ Github</span>
            <div>
              {/* <strong>WEB FULLSTACK</strong> */}
              <span>Basé sur React.JS</span>
              <div className="flex">

              <TbBrandGit size={70} />
              <TbBrandGithub size={70} />
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}
