import { AbsoluteFill, Html5Audio, interpolate, OffthreadVideo, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const MyComposition = ({text}: {text: string}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
    return <>
    <AbsoluteFill  className="text-7xl text-center justify-center font-playpen font-black bg-white items-center leading-20">
      <div className="flex flex-col justify-center items-center gap-15 ">

      <div className="w-[80%] ">
      {text}

      </div>
      <div className="text-5xl font-semibold">
        By: Chat ibn GPT
      </div>
      </div>
    </AbsoluteFill>
    <Html5Audio src={staticFile("muqit-nasheed.mp3")} trimBefore={fps * 100} trimAfter={fps*107} volume={1}/>
    </>}