import Icon from "./Icon";

import styles from "../components/Sidebar.module.scss";

import jsonIcons from "../icons.json";

function getIcon(filterIcon) {
    let icons = jsonIcons.filter(icon => icon.name == filterIcon);
    return icons;
}

function Sidebar() {
    return(
        <div className={styles.sidebar}>
            <div className={styles.sidebar__title}>
                <h1>Finance</h1>
            </div>
            <nav className={styles.sidebar__container}>
                <ul className={styles.sidebar__menu}>
                    <li className={styles.sidebar__item}>
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
                        <a>Overview</a>
                    </li>
                    <li className={styles.sidebar__item}>
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
                        <a>Transactions</a>
                    </li>
                    <li className={styles.sidebar__item}>
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
                        <a>Budgets</a>
                    </li>
                    <li className={styles.sidebar__item}>
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
                        <a>Pots</a>
                    </li>
                    <li className={styles.sidebar__item}>
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
                        <a>Recurring bills</a>
                    </li>
                </ul>
            </nav>
        </div>  
    );
}

export default Sidebar;