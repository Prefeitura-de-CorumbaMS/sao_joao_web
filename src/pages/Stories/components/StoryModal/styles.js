import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const modalFadeIn = keyframes`
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${props => props.theme.spacing.md};
  animation: ${fadeIn} 0.3s ease;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  border-radius: 12px;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: ${modalFadeIn} 0.4s ease-out;
  
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #5f1530, #b5003e);
    border-radius: 10px;
  }
  
  @media print {
    box-shadow: none;
    max-height: none;
    width: 100%;
    max-width: 100%;
  }
  
  /* Garantir que o botão de fechar esteja sempre visível */
  .close-btn-wrapper {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 999;
  }
`;

export const Header = styled.div`
  padding: ${props => props.theme.spacing.md};
  padding-right: 60px; /* Mantém espaço para botão de fechar */
  background: white;
  color: #333;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
  border-bottom: 1px solid rgba(140, 0, 51, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: ${props => props.theme.spacing.md};
    padding-right: 60px; /* Mantém espaço para botão de fechar */
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 1.8rem;
  margin: 0 0 ${props => props.theme.spacing.xs} 0;
  background: linear-gradient(135deg, #5f1530, #b5003e);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: 100%;
  
  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontSizes.large};
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: ${props => props.theme.spacing.sm};
  padding-top: ${props => props.theme.spacing.xs};
  border-top: 1px solid rgba(140, 0, 51, 0.1);
  position: relative;
  z-index: 5;
`;

export const FontSizeControl = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.xs};
  background-color: rgba(140, 0, 51, 0.08);
  border-radius: 50px;
  padding: 6px 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  margin-left: auto; /* Empurra para a direita */
  border: 1px solid rgba(140, 0, 51, 0.15);
`;

export const FontSizeButton = styled.button`
  background-color: white;
  border: 2px solid rgba(140, 0, 51, 0.5);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #5f1530;
  font-size: 16px;
  transition: all 0.2s ease;
  margin: 0 3px;
  padding: 0;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &.active {
    background-color: rgba(140, 0, 51, 0.15);
    transform: translateY(-2px);
    border-color: #5f1530;
    box-shadow: 0 4px 8px rgba(140, 0, 51, 0.3);
  }
  
  &:hover {
    background-color: rgba(140, 0, 51, 0.1);
    transform: translateY(-2px);
    border-color: #5f1530;
    box-shadow: 0 4px 8px rgba(140, 0, 51, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    background-color: rgba(140, 0, 51, 0.2);
  }
  
  & > svg {
    width: 18px;
    height: 18px;
  }
`;

export const CloseButton = styled.button`
  font-size: 28px;
  font-weight: 700;
  background-color: white;
  border: 2px solid #5f1530;
  color: #5f1530;
  cursor: pointer;
  z-index: 10;
  line-height: 1;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 3px 10px rgba(140, 0, 51, 0.25);
  transition: all 0.3s ease;
  padding: 0;
  
  & > svg {
    width: 28px;
    height: 28px;
  }
  
  &:hover {
    transform: scale(1.1);
    background-color: #f9f9f9;
    box-shadow: 0 5px 15px rgba(140, 0, 51, 0.35);
  }
`;

export const Body = styled.div`
  padding: ${props => props.theme.spacing.lg};
  background-color: #ffffff;
  font-size: ${props => props.fontScale ? props.fontScale * 1.1 : 1.1}em;
  line-height: 1.6;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: ${props => props.theme.spacing.md};
  }
  
  @media print {
    font-size: 12pt;
    line-height: 1.5;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacing.sm};
  color: #666;
  font-size: ${props => props.theme.fontSizes.small};
  
  .author {
    font-weight: ${props => props.theme.fontWeights.medium};
    color: #5f1530;
  }
  
  .date {
    color: #666;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const Author = styled.span`
  font-style: italic;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Paragraph = styled.p`
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.7;
  text-align: justify;
  font-size: calc(${props => props.theme.fontSizes.regular} * ${props => props.fontScale || 1});
  transition: font-size 0.2s ease;
  
  &:first-of-type::first-letter {
    font-size: calc(${props => props.theme.fontSizes.xxlarge} * ${props => props.fontScale || 1});
    font-weight: ${props => props.theme.fontWeights.bold};
    color: #5f1530;
    padding-right: 4px;
    float: left;
    line-height: 0.9;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;


