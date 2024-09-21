import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Apiservice } from "../Service/api.service";
import {
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
  Checkbox,
} from "@mui/material";
import ChannelVidoes from "./Channel-videos";

const Channel = () => {
  const { name } = useParams();
  const { data, isLoading, error, isError } = useQuery(
    ["channel-find", name],
    () => Apiservice.fetching(`channels?part=snippet&id=${name}`),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Stack>
      <Box mt={3} sm={{ border: "1px solid red" }}>
        {isLoading && isLoading ? (
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "normal",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Loading....
          </Typography>
        ) : (
          data && (
            <Box
              sx={{
                width: "100%",
                margin: "0 auto",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={data?.items[0]?.brandingSettings?.image?.bannerExternalUrl}
                sx={{ width: 120, height: 120, margin: "0 auto" }}
              />
              <Box
                sx={{
                  maxWidth: "sm",
                  textAlign: "center",
                  fontFamily: "Monospace",
                  margin: "15px auto",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "normal",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {data?.items[0]?.brandingSettings?.channel?.title}
                  <Checkbox disabled checked />
                </Typography>
                <Typography>
                  {data?.items[0]?.brandingSettings?.channel?.description}
                </Typography>
              </Box>
              <ChannelVidoes name={name} />
            </Box>
          )
        )}
      </Box>
    </Stack>
  );
};

export default Channel;
