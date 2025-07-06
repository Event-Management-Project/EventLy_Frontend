import React from "react";
import ModalWrapper from "./ModalWrapper";

const PrivacyPolicyModal = ({ isOpen, onClose }) => (
  <ModalWrapper isOpen={isOpen} onClose={onClose} title="Privacy Policy">
    <p>
      We respect your privacy and are committed to protecting your personal
      information.
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li>We only collect data necessary for providing services.</li>
      <li>Your data will not be sold or shared without consent.</li>
      <li>You may request deletion of your account and data at any time.</li>
    </ul>
    <p className="text-xs italic text-gray-500 mt-6">
      Last updated: August 1, 2025
    </p>
  </ModalWrapper>
);

export default PrivacyPolicyModal;
