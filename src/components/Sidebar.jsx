import Icon from "./Icon";
import logoLarge from "../assets/images/logo-large.svg";

import styles from "../components/Sidebar.module.scss";

import jsonIcons from "../icons.json";

import { useState } from "react";

function getIcon(filterIcon) {
    let icons = jsonIcons.filter(icon => icon.name == filterIcon);
    return icons;
}


function Sidebar() {
    const [open, setOpen] = useState(true);

    function handleSidebar() {
        setOpen(!open);
        !open ? "openmenu" : "closemenu";
    }

    return (
        <div className={`${styles.sidebar} ${open ? styles.openmenu : styles.closemenu}`}>
            <div className={styles.sidebar__content}>
                <div className={styles.sidebar__title}>
                    <img className={`${open ? styles.showlabel : styles.hidelabel}`} src={logoLarge}/>
                </div>
                <nav className={styles.sidebar__container}>
                    <ul className={styles.sidebar__menu}>
                        <a className={styles.sidebar__item}>
                            <div className={styles.sidebar__icon}>
                                <Icon
                                    fill={getIcon("icon-nav-overview")[0].fill}
                                    height={getIcon("icon-nav-overview")[0].height}
                                    viewBox={getIcon("icon-nav-overview")[0].viewBox}
                                    width={getIcon("icon-nav-overview")[0].width}
                                    d={getIcon("icon-nav-overview")[0].d}
                                    fillPath={getIcon("icon-nav-overview")[0].fillPath[0]}
                                />
                            </div>
                            <span className={`${styles.sidebar__label} ${open ? styles.showlabel : styles.hidelabel}`}>Overview</span>
                        </a>
                        <a className={styles.sidebar__item}>
                            <div className={styles.sidebar__icon}>
                                <Icon
                                    fill={getIcon("icon-nav-transactions")[0].fill}
                                    height={getIcon("icon-nav-transactions")[0].height}
                                    viewBox={getIcon("icon-nav-transactions")[0].viewBox}
                                    width={getIcon("icon-nav-transactions")[0].width}
                                    d={getIcon("icon-nav-transactions")[0].d}
                                    fillPath={getIcon("icon-nav-transactions")[0].fillPath[0]}
                                />
                            </div>
                            <span className={`${styles.sidebar__label} ${open ? styles.showlabel : styles.hidelabel}`}>Transactions</span>
                        </a>
                        <a className={styles.sidebar__item}>
                            <div className={styles.sidebar__icon}>
                                <Icon
                                    fill={getIcon("icon-nav-budgets")[0].fill}
                                    height={getIcon("icon-nav-budgets")[0].height}
                                    viewBox={getIcon("icon-nav-budgets")[0].viewBox}
                                    width={getIcon("icon-nav-budgets")[0].width}
                                    d={getIcon("icon-nav-budgets")[0].d}
                                    fillPath={getIcon("icon-nav-budgets")[0].fillPath[0]}
                                />
                            </div>
                            <span className={`${styles.sidebar__label} ${open ? styles.showlabel : styles.hidelabel}`}>Budgets</span>
                        </a>
                        <a className={styles.sidebar__item}>
                            <div className={styles.sidebar__icon}>
                                <Icon
                                    fill={getIcon("icon-nav-pots")[0].fill}
                                    height={getIcon("icon-nav-pots")[0].height}
                                    viewBox={getIcon("icon-nav-pots")[0].viewBox}
                                    width={getIcon("icon-nav-pots")[0].width}
                                    d={getIcon("icon-nav-pots")[0].d}
                                    fillPath={getIcon("icon-nav-pots")[0].fillPath[0]}
                                />
                            </div>
                            <span className={`${styles.sidebar__label} ${open ? styles.showlabel : styles.hidelabel}`}>Pots</span>
                        </a>
                        <a className={styles.sidebar__item}>
                            <div className={styles.sidebar__icon}>
                                <Icon
                                    fill={getIcon("icon-nav-recurring-bills")[0].fill}
                                    height={getIcon("icon-nav-recurring-bills")[0].height}
                                    viewBox={getIcon("icon-nav-recurring-bills")[0].viewBox}
                                    width={getIcon("icon-nav-recurring-bills")[0].width}
                                    d={getIcon("icon-nav-recurring-bills")[0].d}
                                    fillPath={getIcon("icon-nav-recurring-bills")[0].fillPath[0]}
                                />
                            </div>
                            <span className={`${styles.sidebar__label} ${open ? styles.showlabel : styles.hidelabel}`}>Recurring bills</span>
                        </a>
                    </ul>
                </nav>
            </div>
            <div className={styles.sidebar__close} onClick={handleSidebar}>
                <Icon
                    fill={getIcon("icon-minimize-menu")[0].fill}
                    height={getIcon("icon-minimize-menu")[0].height}
                    viewBox={getIcon("icon-minimize-menu")[0].viewBox}
                    width={getIcon("icon-minimize-menu")[0].width}
                    d={getIcon("icon-minimize-menu")[0].d}
                    fillPath={getIcon("icon-minimize-menu")[0].fillPath[0]}
                />
                <a className={`${styles.sidebar__label} ${open ? styles.showlabel : styles.hidelabel}`}>Minimize menu</a>
            </div>
        </div>
    );
}

export default Sidebar;