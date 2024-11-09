import AnimatedSection from '@/ui/AnimatedSection';
import { Divider } from '@mui/material';

const AnimatedDivider = () => {
  return (
    <AnimatedSection className="mx-auto my-[2rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
      <Divider className="bg-multiBrown/50" variant="middle" />
    </AnimatedSection>
  );
}

export default AnimatedDivider