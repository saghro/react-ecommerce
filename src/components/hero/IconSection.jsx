import { Box, Container, Stack, useTheme, Typography } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
const IconSection = () => {
  return (
    <Container>
      <Stack direction={"row"}>
        <MyBox
          icon={<ElectricBoltIcon />}
          title={undefined}
          subTitle={undefined}
        />
        <MyBox
          icon={<WorkspacePremiumOutlinedIcon />}
          title={undefined}
          subTitle={undefined}
        />
        <MyBox
          icon={<AccessAlarmOutlinedIcon />}
          title={undefined}
          subTitle={undefined}
        />
        <MyBox
          icon={<CreditScoreOutlinedIcon />}
          title={undefined}
          subTitle={undefined}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box>
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
