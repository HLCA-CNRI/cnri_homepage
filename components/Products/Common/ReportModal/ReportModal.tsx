import React, {memo} from "react";
import Image from "next/image";
import {ModalBackground, ModalContentContainer} from "../../../../styles/commonStyles";

type PropTypes = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
};

const ReportModal = memo(({isOpen, setIsOpen}: PropTypes) => {
  const onClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ModalBackground onClick={onClick} isOpen={isOpen} />
      {/* pc */}
      <ModalContentContainer
        isOpen={isOpen}
        className="active hidden xl:block cursor-pointer"
        width="60vw"
        height="34vw"
        onClick={onClick}>
        <div className="w-full h-full relative">
          <Image src="/images/product/beta_report_full.png" layout="fill" priority />
        </div>
      </ModalContentContainer>

      {/* mobile */}
      <ModalContentContainer
        className="active block xl:hidden"
        width="90vw"
        height="52vw"
        isOpen={isOpen}>
        <div className="w-full h-full relative">
          <Image src="/images/product/beta_report_full.png" layout="fill" priority />
        </div>
      </ModalContentContainer>
    </>
  );
});

export default ReportModal;
