import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import classnames from 'classnames';
import {
    Wrapper, 
    LinksDiv, 
    LinkElement,
    StrongText,
    TopAndBottomDiv,
} from './styles';
import GlobalStyles from '../../styles/GlobalStyles';
import Logo from 'logo.png';
import {
    Menu,
    Home, 
    Navigation, 
    Map, 
    Video, 
    Database, 
    Settings, 
    LogOut,
} from 'react-feather';

const NavMenu = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const {pathname} = useLocation();
    
    return (
        <>  
            <GlobalStyles />

            <Wrapper active={menuIsOpen}>
                <TopAndBottomDiv>
                    <Menu 
                        color="#CACACA" 
                        onClick={() => {setmenuIsOpen(!menuIsOpen)}}
                        style={menuIsOpen ? {display: 'none'} : {display: 'inline'}}    
                    />
                    <img 
                        src={Logo} 
                        alt="Lactec" 
                        width="100" 
                        onClick={() => {setmenuIsOpen(!menuIsOpen)}}
                    />
                </TopAndBottomDiv>

                <LinksDiv>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <LinkElement color={classnames(pathname === '/' && 'active')}>
                            <Home color={`${pathname === '/' ? '#0AB3FB' : '#CACACA'}`}/>
                            <StrongText 
                                active={menuIsOpen} 
                                color={classnames(pathname === '/' && 'active')}
                            >
                                Painel de Controle
                            </StrongText>
                        </LinkElement>
                    </Link>

                    <Link to='/navigation' style={{textDecoration: 'none'}}>
                        <LinkElement color={classnames(pathname === '/navigation' && 'active')}>
                            <Navigation color={`${pathname === '/navigation' ? '#0AB3FB' : '#CACACA'}`}/>
                            <StrongText 
                                active={menuIsOpen}
                                color={classnames(pathname === '/navigation' && 'active')} 
                            >
                                Navegação
                            </StrongText>
                        </LinkElement>
                    </Link>

                    <Link to='/roundconfig' style={{textDecoration: 'none'}}>
                        <LinkElement color={classnames(pathname === '/roundconfig' && 'active')}>
                            <Map color={`${pathname === '/roundconfig' ? '#0AB3FB' : '#CACACA'}`}/>
                            <StrongText 
                                active={menuIsOpen}
                                color={classnames(pathname === '/roundconfig' && 'active')} 
                            >
                                Configuração de Rondas
                            </StrongText>
                        </LinkElement>
                    </Link>

                    <Link to='/inspection' style={{textDecoration: 'none'}}>
                        <LinkElement color={classnames(pathname === '/inspection' && 'active')}>
                            <Video color={`${pathname === '/inspection' ? '#0AB3FB' : '#CACACA'}`}/>
                            <StrongText 
                                active={menuIsOpen}
                                color={classnames(pathname === '/inspection' && 'active')} 
                            >
                                Inspeção em Tempo Real
                            </StrongText>
                        </LinkElement>
                    </Link>

                    <Link to='/roundhistory' style={{textDecoration: 'none'}}>
                        <LinkElement color={classnames(pathname === '/roundhistory' && 'active')}>
                            <Database color={`${pathname === '/roundhistory' ? '#0AB3FB' : '#CACACA'}`}/>
                            <StrongText
                                active={menuIsOpen}
                                color={classnames(pathname === '/roundhistory' && 'active')}
                            >
                                Histórico de Rondas
                            </StrongText>
                        </LinkElement>
                    </Link>

                    <Link to='/appconfig' style={{textDecoration: 'none'}}>
                        <LinkElement color={classnames(pathname === '/appconfig' && 'active')}>
                            <Settings color={`${pathname === '/appconfig' ? '#0AB3FB' : '#CACACA'}`}/>
                            {/* width={70} */}
                            <StrongText 
                                active={menuIsOpen}
                                color={classnames(pathname === '/appconfig' && 'active')} 
                            >
                                Configuração
                            </StrongText>
                        </LinkElement>
                    </Link>
                </LinksDiv>

                <TopAndBottomDiv>
                    <LogOut color="#CACACA" width={70}/>
                </TopAndBottomDiv>
            </Wrapper>
        </>
    );
}

export default NavMenu;