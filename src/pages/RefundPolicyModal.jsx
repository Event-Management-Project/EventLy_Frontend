import React from "react";
import ModalWrapper from "./ModalWrapper";

const RefundPolicyModal = ({ isOpen, onClose }) => (
  <ModalWrapper isOpen={isOpen} onClose={onClose} title="Refund Policy">
    <p>Refunds are subject to the organiser’s specific refund terms.</p>
    <ul className="list-disc list-inside space-y-2">
      <li>Most tickets are non-refundable unless the event is cancelled.</li>
      <li>Contact the event organiser for refund issues or disputes.</li>
      <li>Service fees are non-refundable in all cases.</li>
    </ul>
    <p className="text-xs italic text-gray-500 mt-6">
      Last updated: August 1, 2025
    </p>
  </ModalWrapper>
);

export default RefundPolicyModal;
