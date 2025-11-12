import svgPaths from "./svg-3fps8b99yu";
import imgImageGoogleLogo from "figma:asset/a0aaf3d13acf1daac1bc8948a49e1a86d610da5d.png";
import imgImageHarvardLogo from "figma:asset/a087b60a651c619b0a4c49702b3a24969434dfdb.png";
import imgImageMitLogo from "figma:asset/6955a7d1f0eb00c44e2044edf183e11f290b798d.png";
import imgImageStanfordLogo from "figma:asset/400459fce8dae05d8e8bac6172064ce2ac98915a.png";
import imgImageOpenAiLogo from "figma:asset/b15ac9d7cb47268a9eff01d0654f0f6fc13136de.png";
import imgImageMicrosoftLogo from "figma:asset/dbb962cf5054d37b895b914a0d828245f884f78c.png";
import imgImageDeepMindLogo from "figma:asset/3f8c4310e60e6c47abc46492d073d5770f9d7c51.png";

function Heading() {
  return (
    <div className="absolute h-[180px] left-[320px] top-[115px] w-[896px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[60px] left-[448.05px] not-italic text-[48px] text-center text-white top-0 tracking-[0.2637px] translate-x-[-50%] w-[854px]">{`Unlock Deeper Insights: Revolutionizing Feature Extraction & Essay Assessment`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[56px] left-[320px] top-[319px] w-[896px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[448.16px] not-italic text-[#53eafd] text-[20px] text-center top-0 tracking-[-0.4492px] translate-x-[-50%] w-[886px]">Our AI-powered solutions transform raw data into actionable intelligence and elevate your educational evaluations.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[166.67px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#00b8db] h-[40px] left-[668.66px] rounded-[8px] top-[415px] w-[198.672px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[16px] not-italic text-[14px] text-nowrap text-white top-[10px] tracking-[-0.1504px] whitespace-pre">Explore Our Solutions</p>
      <Icon />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute bg-[#0f172b] h-[556px] left-0 top-[72px] w-[1536px]" data-name="Hero">
      <Heading />
      <Paragraph />
      <Button />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-[383.95px] not-italic text-[48px] text-center text-nowrap text-white top-px tracking-[0.3516px] translate-x-[-50%] whitespace-pre">Our Solutions</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[383.52px] not-italic text-[#90a1b9] text-[20px] text-center text-nowrap top-0 tracking-[-0.4492px] translate-x-[-50%] whitespace-pre">Transform your data and educational processes with our cutting-edge AI solutions</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[92px] items-start left-[384px] top-0 w-[768px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 18V5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p11c39380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2e947480} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d7a0320} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c99ddc0} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1d3ae070} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p157a9000} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p25258198} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Solutions() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#00b8db] items-center justify-center left-[24px] rounded-[10px] size-[48px] to-[#00d3f2] top-[24px]" data-name="Solutions">
      <Icon1 />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[16px] left-[24px] top-[94px] w-[444px]" data-name="CardTitle">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[16px] text-nowrap text-white top-0 tracking-[-0.3125px] whitespace-pre">Intelligent Feature Extraction</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="absolute h-[72px] left-[24px] top-[116px] w-[444px]" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#cad5e2] text-[16px] top-0 tracking-[-0.3125px] w-[406px]">Automatically identify and extract relevant features from diverse datasets for machine learning, research, and analytics.</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="h-[188px] relative shrink-0 w-[492px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[188px] relative w-[492px]">
        <Solutions />
        <CardTitle />
        <CardDescription />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[189.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[189.391px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Natural Language Processing</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Text />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[119.766px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Image Recognition</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Text1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[135.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[135.328px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Time-Series Analysis</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon4 />
      <Text2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[149.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[149.406px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Custom Model Support</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Text3 />
    </div>
  );
}

function Solutions1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[444px]" data-name="Solutions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-full items-start relative w-[444px]">
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[259.25px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[444px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#00b8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[444px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[168.75px] not-italic text-[#00d3f2] text-[14px] text-nowrap top-[8px] tracking-[-0.1504px] whitespace-pre">Learn More</p>
        <Icon6 />
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[492px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-full items-start pb-[24px] pl-[24px] pr-0 pt-0 relative w-[492px]">
        <Solutions1 />
        <Button1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(29,41,61,0.5)] box-border content-stretch flex flex-col gap-[24px] items-start p-[2px] relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,184,219,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader />
      <CardContent />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p462d500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 10V16" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2b645f80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Solutions2() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#ad46ff] items-center justify-center left-[24px] rounded-[10px] size-[48px] to-[#c27aff] top-[24px]" data-name="Solutions">
      <Icon7 />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="absolute h-[16px] left-[24px] top-[94px] w-[444px]" data-name="CardTitle">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[16px] text-nowrap text-white top-0 tracking-[-0.3125px] whitespace-pre">{`Automated Essay Grading & Feedback`}</p>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="absolute h-[72px] left-[24px] top-[116px] w-[444px]" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#cad5e2] text-[16px] top-0 tracking-[-0.3125px] w-[403px]">Streamline essay evaluation with our sophisticated AI, providing accurate scores and constructive feedback at scale.</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="h-[188px] relative shrink-0 w-[492px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[188px] relative w-[492px]">
        <Solutions2 />
        <CardTitle1 />
        <CardDescription1 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[138.562px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[138.562px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Grammatical Analysis</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon8 />
      <Text4 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[134.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[134.266px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Semantic Coherence</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon9 />
      <Text5 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[123.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[123.234px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Argument Strength</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon10 />
      <Text6 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[133.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[133.219px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Plagiarism Detection</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon11 />
      <Text7 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[140.562px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[140.562px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Customizable Rubrics</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon12 />
      <Text8 />
    </div>
  );
}

function Solutions3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[444px]" data-name="Solutions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-full items-start relative w-[444px]">
        <Container5 />
        <Container6 />
        <Container7 />
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[259.25px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[444px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ad46ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[444px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[168.75px] not-italic text-[#c27aff] text-[14px] text-nowrap top-[8px] tracking-[-0.1504px] whitespace-pre">Learn More</p>
        <Icon13 />
      </div>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[492px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-full items-start pb-[24px] pl-[24px] pr-0 pt-0 relative w-[492px]">
        <Solutions3 />
        <Button2 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(29,41,61,0.5)] box-border content-stretch flex flex-col gap-[24px] items-start p-[2px] relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(173,70,255,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader1 />
      <CardContent1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[424px] left-[256px] top-[156px] w-[1024px]" data-name="Container">
      <Card />
      <Card1 />
    </div>
  );
}

function Solutions4() {
  return (
    <div className="absolute bg-[#0f172b] h-[736px] left-0 top-[628px] w-[1536px]" data-name="Solutions">
      <Container />
      <Container10 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1512px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[21px] not-italic text-[#90a1b9] text-[14px] top-0 tracking-[-0.1504px] w-[71px]">Trusted By</p>
    </div>
  );
}

function ImageGoogleLogo() {
  return (
    <div className="absolute left-[270.11px] opacity-60 size-[48px] top-0" data-name="Image (Google logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageGoogleLogo} />
    </div>
  );
}

function ImageHarvardLogo() {
  return (
    <div className="absolute h-[48px] left-[366.11px] opacity-60 top-0 w-[49.375px]" data-name="Image (Harvard logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageHarvardLogo} />
    </div>
  );
}

function ImageMitLogo() {
  return (
    <div className="absolute left-[463.48px] opacity-60 size-[48px] top-0" data-name="Image (MIT logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageMitLogo} />
    </div>
  );
}

function ImageStanfordLogo() {
  return (
    <div className="absolute h-[48px] left-[559.48px] opacity-60 top-0 w-[36.266px]" data-name="Image (Stanford logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageStanfordLogo} />
    </div>
  );
}

function ImageOpenAiLogo() {
  return (
    <div className="absolute h-[48px] left-[643.75px] opacity-60 top-0 w-[176.672px]" data-name="Image (OpenAI logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageOpenAiLogo} />
    </div>
  );
}

function ImageMicrosoftLogo() {
  return (
    <div className="absolute h-[48px] left-[868.42px] opacity-60 top-0 w-[46.938px]" data-name="Image (Microsoft logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageMicrosoftLogo} />
    </div>
  );
}

function ImageDeepMindLogo() {
  return (
    <div className="absolute h-[48px] left-[963.36px] opacity-60 top-0 w-[206.516px]" data-name="Image (DeepMind logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageDeepMindLogo} />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[32px] w-[1472px]" data-name="Container">
      <ImageGoogleLogo />
      <ImageHarvardLogo />
      <ImageMitLogo />
      <ImageStanfordLogo />
      <ImageOpenAiLogo />
      <ImageMicrosoftLogo />
      <ImageDeepMindLogo />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[1536px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function CompanyLogos() {
  return (
    <div className="absolute bg-[#1d293d] box-border content-stretch flex flex-col gap-[24px] h-[272px] items-start left-0 px-0 py-[50px] top-[1364px] w-[1536px]" data-name="CompanyLogos">
      <Paragraph2 />
      <Container12 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[1636px] left-0 top-0 w-[1536px]" data-name="Main Content">
      <Hero />
      <Solutions4 />
      <CompanyLogos />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[280px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[280px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[50px] not-italic text-[#90a1b9] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">© 2025 IntelliAI. All rights reserved.</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_14)" id="Icon">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b89e780} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] h-[20px] items-start justify-center relative">
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1bcdee00} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 7.5H1.66667V17.5H5V7.5Z" id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25677470} id="Vector_3" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] h-[20px] items-start justify-center relative">
        <Icon15 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1d939600} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p5272800} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] h-[20px] items-start justify-center relative w-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[146px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[20px] items-center relative w-[146px]">
        <Link />
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#020618] content-stretch flex h-[116px] items-center justify-between left-0 top-[1636px] w-[1536px]" data-name="Footer">
      <Paragraph3 />
      <Container13 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute h-[1752px] left-0 top-0 w-[1536px]" data-name="App">
      <MainContent />
      <Footer />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-0 tracking-[-0.4492px] whitespace-pre">BXD</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[32px] relative shrink-0 w-[108.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[108.734px]">
        <Container14 />
        <Text9 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[43.141px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[43.141px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#cad5e2] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.156px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[67.156px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#cad5e2] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Solutions</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50.016px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[50.016px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#cad5e2] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Pricing</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#cad5e2] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">About Us</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[57.625px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[57.625px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#cad5e2] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[24px] relative shrink-0 w-[413.328px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[32px] h-[24px] items-center relative w-[413.328px]">
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[68.109px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[68.109px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#cad5e2] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Login</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-[#00b8db] grow h-[36px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre">Sign Up</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[36px] relative shrink-0 w-[163.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[163.859px]">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[68px] items-center justify-between pl-[16px] pr-[16.016px] py-0 relative w-full">
          <Container15 />
          <Navigation />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(2,6,24,0.8)] box-border content-stretch flex flex-col h-[72px] items-start left-0 pb-px pt-0 px-0 top-0 w-[1536px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#1d293d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container17 />
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-white relative size-full" data-name="Homepage">
      <App />
      <Header />
    </div>
  );
}