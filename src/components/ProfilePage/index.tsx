import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Rodrigo Junior</h1>
        <h2>@Legend_Attack</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Belo Horizonte, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 27 de abril de 1999
          </li>

          <Followage>
            <span>
              seguindo <strong>300</strong>
            </span>
            <span>
              <strong>102 </strong> seguidores
            </span>
          </Followage>
        </ul>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
