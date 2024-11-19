import Box from "./Box";
import Testimonial from "./Testimonial";
import Collaborate from "./Collaborate";

export default function User() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex  items-center flex-col">
      <Box
        head="Adrian Brewer"
        data={["Engineer at BB Agency - Industry", "New York, United States"]}
        tags={["UX Research", "CX Strategy", "Project Management"]}
        icon={true}
        buttons={[]}
      />

      <Box
        head="About Me"
        data={[
          `Hi, my name is Adrian Brewer. I'm the Co-founder and Head of Design at
         BB agency. Designer at heart. Head of Design might be an
         overstatement, but as with many 20 people agencies I need to wear
         many different hats...`,
        ]}
        tags={[]}
        icon={true}
        buttons={[]}
      />

      <Box
        head="Previous Collaborate"
        data={[]}
        icon={false}
        tags={["Coco Cola"]}
        buttons={["+ Add Previous Collaboration"]}
      />

      <Collaborate />

      <Testimonial />
    </div>
  );
}
