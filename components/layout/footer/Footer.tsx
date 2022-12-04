import * as S from "./S.Footer";
import InstagramIcon from "@asset/icons/instagram.svg";
import LinkedInIcon from "@asset/icons/linkedin.svg";
interface SectionProps {
  title: string;
  links?: string[];
}



const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerContent>
        {FooterData.map(({ title, links }, index) => (
          <Section title={title} links={links} key={title + index} />
        ))}
        {<SectionVariant title={"Subscribe"} />}
      </S.ContainerContent>
      <S.Divider />
      <S.ContainerCopyRight>
        <S.Text>Copyright (c) 2022 Ushop. All rights reserved.</S.Text>
        <S.Text>Privacy Policy | Terms of Use</S.Text>
      </S.ContainerCopyRight>
    </S.Container>
  );
};

const Section: React.FC<SectionProps> = ({ title, links }) => {
  return (
    <S.ContainerSection>
      <S.TextBold>{title}</S.TextBold>
      {links && links.map((link) => <S.Text key={title + link}>{link}</S.Text>)}
    </S.ContainerSection>
  );
};

const SectionVariant: React.FC<SectionProps> = ({ title }) => {
  return (
    <S.ContainerSectionVariant>
      <S.TextBold>{title}</S.TextBold>
      <S.ContainerIcons>
        <S.Image src={InstagramIcon} />
        <S.Image src={LinkedInIcon} />
      </S.ContainerIcons>
    </S.ContainerSectionVariant>
  );
};

const FooterData = [
  {
    title: "Shop and Learn",
    links: ["Your Account", "Your Orders"],
  },
  {
    title: "Get to Know Us",
    links: ["Sustainability", "FAQs"],
  },
];

export default Footer;
