import React from 'react';
import classNames from 'classnames';
import styles from './index.module.sass';
import { IGeneralLayout } from './index.types';
import FistWithBigFinger from 'common/assets/FistWithBigFinger';
import GeneralButton from 'common/components/GeneralButton';
import useWindowSize from 'common/modules/hooks/useWindowSize';

const GeneralLayout: React.FC<IGeneralLayout> = ({
  title,
  layoutType,
  buttonOptions,
}) => {
  const windowSize = useWindowSize();
  return (
    <div className={classNames(styles[layoutType], styles.canvas)}>
      <div className="wrapper">
        <div className={styles.container}>
          <div className={styles.left}>
            {windowSize.width <= 425 ? (
              <FistWithBigFinger width={288} height={192} />
            ) : (
              <FistWithBigFinger />
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.text}>
              {layoutType === 'end' && (
                <h1 className={styles.label}>Total Score:</h1>
              )}
              <div className={styles.title}>{title}</div>
            </div>
            <GeneralButton
              value={buttonOptions.value}
              onClick={buttonOptions.onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralLayout;
