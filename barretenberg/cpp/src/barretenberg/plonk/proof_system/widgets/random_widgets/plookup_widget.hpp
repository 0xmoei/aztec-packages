// === AUDIT STATUS ===
// internal:    { status: not started, auditors: [], date: YYYY-MM-DD }
// external_1:  { status: not started, auditors: [], date: YYYY-MM-DD }
// external_2:  { status: not started, auditors: [], date: YYYY-MM-DD }
// =====================

#pragma once
#include "random_widget.hpp"

namespace bb::plonk {
template <typename Field,
          typename Group,
          typename Transcript,
          const size_t num_roots_cut_out_of_vanishing_polynomial = 4>
class VerifierPlookupWidget {
  public:
    VerifierPlookupWidget();

    static Field compute_quotient_evaluation_contribution(typename Transcript::Key*,
                                                          const Field& alpha_base,
                                                          const Transcript& transcript,
                                                          Field& quotient_numerator_eval);

    static Field append_scalar_multiplication_inputs(typename Transcript::Key*,
                                                     const Field& alpha_base,
                                                     const Transcript& transcript,
                                                     std::map<std::string, Field>& scalars);
};

template <const size_t num_roots_cut_out_of_vanishing_polynomial = 4>
class ProverPlookupWidget : public ProverRandomWidget {
  public:
    inline ProverPlookupWidget(proving_key*);
    inline ProverPlookupWidget(const ProverPlookupWidget& other);
    inline ProverPlookupWidget(ProverPlookupWidget&& other);
    inline ProverPlookupWidget& operator=(const ProverPlookupWidget& other);
    inline ProverPlookupWidget& operator=(ProverPlookupWidget&& other);

    inline void compute_sorted_list_polynomial(transcript::StandardTranscript& transcript);

    inline void compute_grand_product_polynomial(transcript::StandardTranscript& transcript);

    inline void compute_round_commitments(transcript::StandardTranscript& transcript,
                                          const size_t round_number,
                                          work_queue& queue) override;

    inline bb::fr compute_quotient_contribution(const bb::fr& alpha_base,
                                                const transcript::StandardTranscript& transcript) override;
};

} // namespace bb::plonk

#include "./plookup_widget_impl.hpp"
