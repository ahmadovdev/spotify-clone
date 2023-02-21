import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlaylistItem } from "../../redux/PlayLists/playlistTracks";
import { fetchPlaylistId } from "../../redux/PlayLists/playListId";
import { PlaylistCard } from "../PlaylistCard";
import {
  Section,
  Container,
  ContentSpacing,
  WrapperImage,
  ImgContent,
  TitleContent,
  TitleName,
  TitleDescr,
  TitleArtists,
  TitleAddress,
  TitleStat,
  PlaylistItems,
  PlayListMenu,
  PlayListSpan,
  PlayListLike,
  PlayListButton,
  PlayListNavbarItems,
  PlaylistNavbarItem,
  TitleUserSpotify,
  TitleUserSpotifyLogo,
} from "./style";

export const PlayList = () => {
  const dispatch = useDispatch();
  const { playlist } = useSelector((state) => state.playlist);
  const { playlistId } = useSelector((state) => state.playlistId);
  const { id } = useParams();

  // console.log(playlist, "id");

  React.useEffect(() => {
    dispatch(fetchPlaylistItem(id));
    dispatch(fetchPlaylistId(id));
  }, []);

  return (
    <Section>
      <Container>
        <ContentSpacing>
          <WrapperImage>
            {playlistId?.images?.map((item, idx) => {
              return <ImgContent key={idx} src={item.url} />;
            })}
          </WrapperImage>
          <TitleContent>
            <TitleName>{playlistId?.type}</TitleName>
            <TitleDescr>{playlistId?.name}</TitleDescr>
            <TitleArtists>{playlistId?.description}</TitleArtists>
            <TitleUserSpotify>
              <TitleUserSpotifyLogo src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5" />
              <TitleAddress>Spotify</TitleAddress>
              <TitleStat>
                {playlistId?.followers?.total} likes {playlistId?.tracks?.total}{" "}
                songs, about 3hr
              </TitleStat>
            </TitleUserSpotify>
          </TitleContent>
        </ContentSpacing>
        <PlaylistItems>
          <PlayListMenu>
            <PlayListSpan>
              <svg
                role="img"
                height="28"
                width="28"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="Svg-sc-ytk21e-0 uPxdw"
              >
                <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
              </svg>
            </PlayListSpan>
            <PlayListLike>
              <svg
                role="img"
                height="32"
                width="32"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="filter-green"
              >
                <path d="M5.21 1.57a6.757 6.757 0 016.708 1.545.124.124 0 00.165 0 6.741 6.741 0 015.715-1.78l.004.001a6.802 6.802 0 015.571 5.376v.003a6.689 6.689 0 01-1.49 5.655l-7.954 9.48a2.518 2.518 0 01-3.857 0L2.12 12.37A6.683 6.683 0 01.627 6.714 6.757 6.757 0 015.21 1.57zm3.12 1.803a4.757 4.757 0 00-5.74 3.725l-.001.002a4.684 4.684 0 001.049 3.969l.009.01 7.958 9.485a.518.518 0 00.79 0l7.968-9.495a4.688 4.688 0 001.049-3.965 4.803 4.803 0 00-3.931-3.794 4.74 4.74 0 00-4.023 1.256l-.008.008a2.123 2.123 0 01-2.9 0l-.007-.007a4.757 4.757 0 00-2.214-1.194z"></path>
              </svg>
            </PlayListLike>
            <PlayListButton>
              <svg
                role="img"
                height="32"
                width="32"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="filter-green"
              >
                <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
            </PlayListButton>
          </PlayListMenu>
          <PlayListNavbarItems>
            <PlaylistNavbarItem>#</PlaylistNavbarItem>
            <PlaylistNavbarItem>TITLE</PlaylistNavbarItem>
            <PlaylistNavbarItem>ALBUM</PlaylistNavbarItem>
            <PlaylistNavbarItem>DATE ADDED</PlaylistNavbarItem>
            <PlaylistNavbarItem>TIME</PlaylistNavbarItem>
          </PlayListNavbarItems>
        </PlaylistItems>
        {playlist.map((item, idx) => (
          <PlaylistCard key={idx} number={idx + 1} {...item} />
        ))}
      </Container>
    </Section>
  );
};
