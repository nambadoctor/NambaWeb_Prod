import { Drawer, Box, List, ListItem } from '@mui/material';
import useConsultationViewHook from '../../CustomHooks/useConsultationViewHook';

export const SideBar = () => {
    const { LinkScroll } = useConsultationViewHook();
    const titles = ['Patient Details', 'Reports', 'Prescriptions', 'Notes'];
    return (
        <div style={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: 200,
                        height: 'auto',
                        boxSizing: 'border-box',
                        marginTop: '5.7em',
                    },
                }}
            >
                <Box sx={{ overflow: 'hidden' }}>
                    <List>
                        {titles.map((title, i) => (
                            <LinkScroll
                                activeClass="active"
                                to={title}
                                spy={true}
                                smooth={true}
                                isDynamic={true}
                                duration={500}
                                offset={-100}
                            >
                                <ListItem
                                    button
                                    id={title}
                                    key={i}
                                    style={{ margin: '15px' }}
                                >
                                    {title}
                                </ListItem>
                            </LinkScroll>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    );
};
