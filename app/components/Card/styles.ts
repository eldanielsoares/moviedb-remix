/* eslint-disable @typescript-eslint/no-use-before-define */
import styled  from 'styled-components';


export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const MovieDetails = styled.div`
  width: 100%;
  height: 200px;
  opacity: 1;
  visibility: visible;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 1%, rgba(0,0,0,0.61) 31%, rgba(0,0,0,1) 100%);
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: opacity 0.5s;

  
  
  @media screen and (min-width: 768px) {
    opacity: 0;
    visibility: hidden;
    height: 400px;
  }

  h3 {
    color: #fff;
  }

  p {
    font-weight: 400;
    color: #fff;
    margin-top: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:3; 
    -webkit-box-orient: vertical;

    @media screen and (min-width: 768px) {
      -webkit-line-clamp:10; 
  }
  }



`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 13px 0px rgba(0,0,0,0.4);
  position: relative;
  transition: transform 0.2s ease-in-out;

  @media screen and (min-width: 768px){
    &:hover ${MovieDetails} {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
      transform: scale(1.1);
    }

  }

  


`;


