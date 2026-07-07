import { FC, memo } from 'react'
import {
  MailOutlined as Mail,
  PhoneOutlined as Phone,
  LinkOutlined as Link,
  LaptopOutlined as Laptop,
} from '@ant-design/icons'
import {
  HeaderWrapper,
  Name,
  HeaderInfoWrapper,
  HeaderInfo,
  HeaderInfoContent,
  HeaderInfoContentSpan,
  ModifiedParagraph,
} from './style'
import LocationSvg from 'tb-icons/lib/svgs/location.svg?react'

export interface HeaderProps {
  name: string
  email: string
  site: string
  phone: string
  github: {
    name: string
    url: string
  }
  zhihu: {
    name: string
    url: string
  }
  exp: string
  location: string
}

export const Header: FC<HeaderProps> = memo((props) => (
  <HeaderWrapper>
    <Name>{props.name}</Name>
    <hr />
    <HeaderInfoWrapper>
      <HeaderInfo>
        <Mail />
        <HeaderInfoContent href={`mailto:${props.email}`}>
          <ModifiedParagraph copyable>{props.email}</ModifiedParagraph>
        </HeaderInfoContent>
      </HeaderInfo>
      <HeaderInfo>
        <Laptop />
        <HeaderInfoContentSpan>
          <ModifiedParagraph>{props.exp}</ModifiedParagraph>
        </HeaderInfoContentSpan>
      </HeaderInfo>
      <HeaderInfo>
        <Phone />
        <HeaderInfoContent href={`tel:+86-${props.phone}`}>
          <ModifiedParagraph copyable>{props.phone}</ModifiedParagraph>
        </HeaderInfoContent>
      </HeaderInfo>
      {props.site ? (
        <HeaderInfo>
          <Link />
          <HeaderInfoContent href={`https://${props.site}`} target="_blank">
            <ModifiedParagraph copyable={{ text: `https://${props.site}` }}>{props.site}</ModifiedParagraph>
          </HeaderInfoContent>
        </HeaderInfo>
      ) : null}
      <HeaderInfo>
        <LocationSvg style={{ fontSize: 18, fill: 'var(--text-color)' }} />
        <HeaderInfoContentSpan>
          <ModifiedParagraph>{props.location}</ModifiedParagraph>
        </HeaderInfoContentSpan>
      </HeaderInfo>
    </HeaderInfoWrapper>
  </HeaderWrapper>
))
